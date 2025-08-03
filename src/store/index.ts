import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './slices/questionsSlice';
import userReducer from './slices/userSlice';
import onboardingReducer from './slices/onboardingSlice';
import categoriesReducer from './slices/categoriesSlice';

export const store = configureStore({
    reducer: {
        questions: questionsReducer,
        user: userReducer,
        onboarding: onboardingReducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 