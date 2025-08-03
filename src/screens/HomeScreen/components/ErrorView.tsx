import React from 'react';
import { View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import CustomText from '../../../components/CustomText';
import { homeScreenStyles as styles } from '../../../styles/homeScreenStyles';

interface ErrorViewProps {
    error: string;
    onRetry: () => void;
}

export default function ErrorView({ error, onRetry }: ErrorViewProps) {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.errorContainer}>
                <CustomText style={styles.errorText}>{error}</CustomText>
                <TouchableOpacity onPress={onRetry}>
                    <CustomText style={styles.retryText}>
                        {t('home.error.retry')}
                    </CustomText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
} 