import React from 'react';
import { View } from 'react-native';
import {
    baseContainer,
    baseSpaceBetween,
    basePaddingHorizontal,
    basePaddingBottom,
} from '../../../styles/baseStyles';

import TopSection from './TopSection';
import BottomSection from './BottomSection';

interface OnboardingContentProps {
    currentData: any;
    currentIndex: number;
    onNext: () => void;
}

export default function OnboardingContent({ currentData, currentIndex, onNext }: OnboardingContentProps) {
    return (
        <View style={[baseContainer, baseSpaceBetween, basePaddingHorizontal, basePaddingBottom]}>
            <TopSection currentData={currentData} currentIndex={currentIndex} />
            <BottomSection
                currentData={currentData}
                currentIndex={currentIndex}
                onNext={onNext}
            />
        </View>
    );
} 