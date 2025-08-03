import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {
    baseImageWidth,
} from '../../../styles/baseStyles';
import { premiumScreenStyles as styles } from '../../../styles/premiumScreenStyles';
import CloseIcon from '../../../assets/icons/CloseIcon';

interface HeaderSectionProps {
    onClose: () => void;
}

export default function HeaderSection({ onClose }: HeaderSectionProps) {
    return (
        <>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <CloseIcon />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/PremiumScreen.png')}
                    style={[baseImageWidth, styles.premiumImage]}
                    resizeMode="cover"
                />
            </View>
        </>
    );
} 