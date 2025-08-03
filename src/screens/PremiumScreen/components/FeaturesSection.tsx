import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
    baseFlexRowStart,
} from '../../../styles/baseStyles';
import { premiumScreenStyles as styles } from '../../../styles/premiumScreenStyles';
import { premiumFeatures } from '../../../data';
import ScanIcon2 from '../../../assets/icons/ScanIcon2';
import SpeedMeter from '../../../assets/icons/SpeedMeter';
import DiagnoseIcon from '../../../assets/icons/DiagnoseIcon';

const getIconComponent = (iconKey: string) => {
    switch (iconKey) {
        case 'scan':
            return <ScanIcon2 />;
        case 'speed':
            return <SpeedMeter />;
        case 'diagnose':
            return <DiagnoseIcon />;
        default:
            return null;
    }
};

export default function FeaturesSection() {
    const { t } = useTranslation();

    return (
        <>
            <View style={styles.headerSection}>
                <View style={baseFlexRowStart}>
                    <Text style={styles.imageTitle}>
                        {t('premium.titleFirst')}
                        <Text style={[styles.imageTitle, styles.thinPageTitle]}>
                            {t('premium.titleLast')}
                        </Text>
                    </Text>
                </View>
                <Text style={styles.imageSubtitle}>{t('premium.subtitle')}</Text>
            </View>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.featuresScroll}
                    scrollEnabled={true}
                >
                    {premiumFeatures.map((feature) => (
                        <View key={feature.id} style={styles.featureCard}>
                            <View style={styles.featureIconWrapper}>
                                <Text style={styles.featureIcon}>
                                    {getIconComponent(feature.iconKey)}
                                </Text>
                            </View>
                            <View>
                                <Text style={[styles.featureText, styles.featureTitle]}>
                                    {t(`premium.features.${feature.key}.title`)}
                                </Text>
                                <Text style={[styles.featureText, styles.featureSubtitle]}>
                                    {t(`premium.features.${feature.key}.subtitle`)}
                                </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
} 