import { useEffect } from 'react';
import { View, StatusBar, ScrollView, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchQuestions, QuestionData } from '../../store/slices/questionsSlice';
import { fetchCategories, CategoryData } from '../../store/slices/categoriesSlice';
import { openLink } from '../../helpers';
import CustomText from '../../components/CustomText';
import { RootState } from '../../store';
import { homeScreenStyles as styles } from '../../styles/homeScreenStyles';

// Components
import HeaderSection from './components/HeaderSection';
import QuestionsSection from './components/QuestionsSection';
import CategoriesSection from './components/CategoriesSection';
import LoadingView from './components/LoadingView';
import ErrorView from './components/ErrorView';

export default function HomeScreen() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { questions, loading: questionsLoading, error: questionsError } = useAppSelector((state: RootState) => state.questions as any);
    const { categories, loading: categoriesLoading, error: categoriesError } = useAppSelector((state: RootState) => state.categories as any);

    useEffect(() => {
        dispatch(fetchQuestions());
        dispatch(fetchCategories());
    }, [dispatch]);

    const tryAgain = () => {
        dispatch(fetchQuestions());
        dispatch(fetchCategories());
    };

    const handleQuestionPress = async (question: QuestionData) => {
        await openLink(question.uri);
    };

    const isLoading = questionsLoading || categoriesLoading;
    const hasError = questionsError || categoriesError;

    if (isLoading) {
        return <LoadingView />;
    }

    if (hasError) {
        return <ErrorView error={questionsError || categoriesError} onRetry={tryAgain} />;
    }

    return (
        <View style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

            <HeaderSection />

            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <QuestionsSection
                        questions={questions}
                        onQuestionPress={handleQuestionPress}
                    />

                    <CategoriesSection categories={categories} />
                </View>
            </ScrollView>
        </View>
    );
} 