import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { moderateScale } from '../../../helpers/sizeNormalize';
import { premiumScreenStyles as styles } from '../../../styles/premiumScreenStyles';
import CustomButton from '../../../components/CustomButton';

interface OptionsSectionProps {
    selectedIndex: number;
    onSelectCheckbox: (index: number) => void;
}

export default function OptionsSection({ selectedIndex, onSelectCheckbox }: OptionsSectionProps) {
    const { t } = useTranslation();

    return (
        <>
            <TouchableOpacity
                style={[
                    styles.radiusView,
                    selectedIndex === 0 && styles.radiusViewSelected,
                    { marginBottom: moderateScale(16) }
                ]}
                onPress={() => onSelectCheckbox(0)}
            >
                <View style={styles.checkboxContainer}>
                    <View style={[styles.checkbox, selectedIndex === 0 && styles.checkboxChecked]}>
                        {selectedIndex === 0 && <View style={styles.checkboxDot} />}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.featureText, styles.checkboxTitle]}>
                            {t('premium.options.freeTrial.title')}
                        </Text>
                        <Text style={[styles.featureText, styles.checkboxDescription]}>
                            {t('premium.options.freeTrial.description')}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.radiusView,
                    selectedIndex === 1 && styles.radiusViewSelected,
                    { marginBottom: moderateScale(24) }
                ]}
                onPress={() => onSelectCheckbox(1)}
            >
                {selectedIndex === 1 && (
                    <View style={styles.saveBadge}>
                        <Text style={styles.saveBadgeText}>Save 50%</Text>
                    </View>
                )}
                <View style={styles.checkboxContainer}>
                    <View style={[styles.checkbox, selectedIndex === 1 && styles.checkboxChecked]}>
                        {selectedIndex === 1 && <View style={styles.checkboxDot} />}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.featureText, styles.checkboxTitle]}>
                            {t('premium.options.cancelAnytime.title')}
                        </Text>
                        <Text style={[styles.featureText, styles.checkboxDescription]}>
                            {t('premium.options.cancelAnytime.description')}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <CustomButton
                title={t('premium.button')}
                onPress={() => { }}
            />
        </>
    );
} 