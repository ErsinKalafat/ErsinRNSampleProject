import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingState {
    isCompleted: boolean;
    currentStep: number;
    totalSteps: number;
    onboardingSeen: boolean;
}

const initialState: OnboardingState = {
    isCompleted: false,
    currentStep: 0,
    totalSteps: 4,
    onboardingSeen: true,
};

const ONBOARDING_STATUS = 'ONBOARDING_STATUS';

export const loadOnboardingStatus = createAsyncThunk(
    'onboarding/loadStatus',
    async () => {
        try {
            const value = await AsyncStorage.getItem(ONBOARDING_STATUS);
            return value === 'true';
        } catch (error) {
            console.error('Error loading onboarding status:', error);
            return false;
        }
    }
);

export const saveOnboardingStatus = createAsyncThunk(
    'onboarding/saveStatus',
    async (isCompleted: boolean) => {
        try {
            await AsyncStorage.setItem(ONBOARDING_STATUS, isCompleted.toString());
            return isCompleted;
        } catch (error) {
            console.error('Error saving onboarding status:', error);
            throw error;
        }
    }
);

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
            state.isCompleted = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadOnboardingStatus.pending, (state) => {
                state.onboardingSeen = true;
            })
            .addCase(loadOnboardingStatus.fulfilled, (state, action) => {
                state.isCompleted = action.payload;
                state.onboardingSeen = false;
            })
            .addCase(loadOnboardingStatus.rejected, (state) => {
                state.onboardingSeen = false;
            })
            .addCase(saveOnboardingStatus.fulfilled, (state, action) => {
                state.isCompleted = action.payload;
            });
    },
});

export const { setOnboardingCompleted } = onboardingSlice.actions;

export default onboardingSlice.reducer; 