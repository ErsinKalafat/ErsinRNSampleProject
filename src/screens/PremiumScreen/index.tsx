import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
    baseContainer,
    baseAbsoluteBottom,
    basePaddingHorizontal,
} from '../../styles/baseStyles';
import { premiumScreenStyles as styles } from '../../styles/premiumScreenStyles';

// Components
import HeaderSection from './components/HeaderSection';
import FeaturesSection from './components/FeaturesSection';
import OptionsSection from './components/OptionsSection';
import BottomSection from './components/BottomSection';

interface PremiumScreenProps {
    onComplete: () => void;
}

export default function PremiumScreen({ onComplete }: PremiumScreenProps) {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const { t } = useTranslation();

    const selectCheckbox = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <View style={[baseContainer, styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <HeaderSection onClose={onComplete} />

            <View style={[baseAbsoluteBottom, basePaddingHorizontal, styles.contentContainer]}>
                <FeaturesSection />

                <OptionsSection
                    selectedIndex={selectedIndex}
                    onSelectCheckbox={selectCheckbox}
                />

                <BottomSection />
            </View>
        </View>
    );
} 