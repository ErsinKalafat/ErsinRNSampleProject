import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { setOnboardingCompleted, saveOnboardingStatus } from '../../store/slices/onboardingSlice';
import { onboardingData } from '../../data';
import { onboardingScreenStyles as styles } from '../../styles/onboardingScreenStyles';

// Components
import OnboardingContent from './components/OnboardingContent';
import PremiumSection from './components/PremiumSection';

export default function OnboardingScreen() {
    const dispatch = useAppDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);

    const completeOnboarding = async () => {
        await dispatch(saveOnboardingStatus(true)); // burası yorum satırına alınarak onboarding ekranları birden fazla kez kontrol edilebilir
        dispatch(setOnboardingCompleted(true));
    };

    const nextScreen = () => {
        if (currentIndex < onboardingData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            completeOnboarding();
        }
    };

    const currentData = onboardingData[currentIndex];

    return (
        <View style={styles.onboardingContainer}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

            {currentIndex === 3 ? (
                <PremiumSection onComplete={nextScreen} />
            ) : (
                <OnboardingContent
                    currentData={currentData}
                    currentIndex={currentIndex}
                    onNext={nextScreen}
                />
            )}
        </View>
    );
} 