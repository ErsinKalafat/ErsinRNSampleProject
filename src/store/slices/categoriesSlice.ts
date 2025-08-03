import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CategoryImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export interface CategoryData {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number;
    image: CategoryImage;
}

interface CategoriesState {
    categories: CategoryData[];
    loading: boolean;
    error: string | null;
    selectedCategory: CategoryData | null;
}

const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
    selectedCategory: null,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
            return response.data.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Kategoriler yüklenirken bir hata oluştu');
        }
    }
);


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer; 