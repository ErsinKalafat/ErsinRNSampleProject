import React from 'react';
import { View, Text } from 'react-native';
import {
    baseFlexEnd,
    baseFullWidth,
    baseTextCenter,
    baseFontRegular,
    baseMarginTop,
    baseMarginBottom,
    baseMarginHorizontal,
    baseBorderRadius,
    baseFlexRowCenter
} from '../../../styles/baseStyles';
import { onboardingScreenStyles as styles } from '../../../styles/onboardingScreenStyles';
import { onboardingData } from '../../../data';
import CustomButton from '../../../components/CustomButton';

interface BottomSectionProps {
    currentData: any;
    currentIndex: number;
    onNext: () => void;
}

export default function BottomSection({ currentData, currentIndex, onNext }: BottomSectionProps) {
    return (
        <View style={[baseFlexEnd, styles.bottomSection]}>
            <View style={[baseFullWidth, baseFlexEnd]}>
                <CustomButton
                    title={currentIndex === 0 ? 'Get Started' : 'Continue'}
                    onPress={onNext}
                />

                {currentIndex === 0 && (
                    <Text style={[baseTextCenter, baseFontRegular, styles.getStartedSubtext]}>
                        By tapping next, you are agreeing to ProductID{'\n'}
                        <Text style={styles.underlinedText}>Terms of Use</Text> & <Text style={styles.underlinedText}>Privacy Policy</Text>.
                    </Text>
                )}
            </View>

            {currentData.showIndicator && (
                <View style={[baseFlexRowCenter, baseMarginTop, baseMarginBottom]}>
                    {onboardingData.map((_, index) => {
                        if (index === 0) return null;
                        return (
                            <View
                                key={index}
                                style={[
                                    baseBorderRadius,
                                    baseMarginHorizontal,
                                    styles.pageDot,
                                    index === currentIndex && styles.pageDotActive
                                ]}
                            />
                        )
                    })}
                </View>
            )}
        </View>
    );
} 