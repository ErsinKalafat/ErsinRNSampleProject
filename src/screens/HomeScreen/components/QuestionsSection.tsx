import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import CustomText from '../../../components/CustomText';
import { QuestionData } from '../../../store/slices/questionsSlice';
import { homeScreenStyles as styles } from '../../../styles/homeScreenStyles';

interface QuestionsSectionProps {
    questions: QuestionData[];
    onQuestionPress: (question: QuestionData) => void;
}

export default function QuestionsSection({ questions, onQuestionPress }: QuestionsSectionProps) {
    const { t } = useTranslation();

    return (
        <>
            <TouchableOpacity>
                <Image
                    source={require('../../../assets/images/PremiumBox.png')}
                    style={styles.premiumImage}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <CustomText style={styles.sectionTitle}>
                {t('home.section.getStarted')}
            </CustomText>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                style={styles.scrollView}
            >
                {questions.map((question: QuestionData) => (
                    <TouchableOpacity
                        key={question.id}
                        style={styles.questionContainer}
                        onPress={() => onQuestionPress(question)}
                    >
                        <Image
                            source={{ uri: question.image_uri }}
                            style={styles.questionImage}
                            resizeMode='stretch'
                        />
                        <View style={styles.questionOverlay}>
                            <Text style={styles.questionTitle}>{question.title}</Text>
                            <Text style={styles.questionSubtitle}>{question.subtitle}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
} 