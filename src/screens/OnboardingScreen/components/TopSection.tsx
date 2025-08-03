import React from 'react';
import { View, Image } from 'react-native';
import {
    baseFlexCenter,
    baseImageWidth,
} from '../../../styles/baseStyles';
import { onboardingScreenStyles as styles } from '../../../styles/onboardingScreenStyles';

interface TopSectionProps {
    currentData: any;
    currentIndex: number;
}

export default function TopSection({ currentData, currentIndex }: TopSectionProps) {
    return (
        <View style={[baseFlexCenter, styles.topSection]}>
            <Image
                source={currentData.title}
                style={[baseImageWidth, styles.onboardingTitleImage]}
                resizeMode='contain'
            />

            {currentIndex === 2 && (
                <>
                    {/* <Image
                        source={require('../../../assets/images/Artwork.png')}
                        style={styles.artworkImage}
                        resizeMode='contain'
                    /> */}
                    {/* <Image
                        source={require('../../../assets/images/Leafs.png')}
                        style={styles.leafsImage}
                        resizeMode='contain'
                    /> */}
                </>
            )}

            <View style={styles.imageContainer}>
                <Image
                    source={currentData.image}
                    style={[baseImageWidth, styles.onboardingContentImage]}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
} 