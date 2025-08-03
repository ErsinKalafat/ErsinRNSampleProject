import React from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import CustomText from '../../../components/CustomText';
import SearchIcon from '../../../assets/icons/SearchIcon';
import { homeScreenStyles as styles } from '../../../styles/homeScreenStyles';

export default function HeaderSection() {
    const { t } = useTranslation();

    return (
        <View style={styles.backgroundContainer}>
            <ImageBackground
                source={require('../../../assets/images/Background.png')}
                style={styles.backgroundLeaf}
                resizeMode='stretch'
            >
                <View style={styles.overlayContent}>
                    <CustomText style={styles.greetingTopText}>
                        {t('home.greeting.top')}
                    </CustomText>
                    <CustomText style={styles.greetingText}>
                        {t('home.greeting.main')}
                    </CustomText>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchIconStyle}>
                            <SearchIcon />
                        </View>
                        <TextInput
                            style={styles.searchInput}
                            placeholder={t('home.search.placeholder')}
                            placeholderTextColor="rgba(175, 175, 175, 1)"
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
} 