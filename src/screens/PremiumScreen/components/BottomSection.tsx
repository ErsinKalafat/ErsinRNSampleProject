import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
    baseFlexRowSpaceBetween,
} from '../../../styles/baseStyles';
import { premiumScreenStyles as styles } from '../../../styles/premiumScreenStyles';

export default function BottomSection() {
    const { t } = useTranslation();

    return (
        <View style={styles.bottomSection}>
            <Text style={styles.bottomText}>
                {t('premium.bottomText')}
            </Text>

            <View style={[baseFlexRowSpaceBetween, styles.bottomButtons]}>
                <TouchableOpacity>
                    <Text style={styles.bottomButtonText}>
                        {t('premium.links.terms')}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.bottomButtonSeparator}>•</Text>
                <TouchableOpacity>
                    <Text style={styles.bottomButtonText}>
                        {t('premium.links.privacy')}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.bottomButtonSeparator}>•</Text>
                <TouchableOpacity>
                    <Text style={styles.bottomButtonText}>
                        {t('premium.links.restore')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 