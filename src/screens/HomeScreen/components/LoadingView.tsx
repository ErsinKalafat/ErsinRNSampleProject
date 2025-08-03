import React from 'react';
import { View, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import CustomText from '../../../components/CustomText';
import { homeScreenStyles as styles } from '../../../styles/homeScreenStyles';

export default function LoadingView() {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <CustomText style={styles.loadingText}>
                    {t('home.loading.text')}
                </CustomText>
            </View>
        </SafeAreaView>
    );
} 