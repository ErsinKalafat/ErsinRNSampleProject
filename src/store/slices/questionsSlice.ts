import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface QuestionData {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
}

interface QuestionsState {
    questions: QuestionData[];
    loading: boolean;
    error: string | null;
    selectedQuestion: QuestionData | null;
}

const initialState: QuestionsState = {
    questions: [],
    loading: false,
    error: null,
    selectedQuestion: null,
};

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Veriler yüklenirken bir hata oluştu');
        }
    }
);

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.loading = false;
                state.questions = action.payload;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { } = questionsSlice.actions;

export default questionsSlice.reducer; 