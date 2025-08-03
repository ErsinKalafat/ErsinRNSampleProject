import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { customButtonStyles as styles } from '../styles/customButtonStyles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function CustomButton({ title, onPress, style, textStyle, disabled = false }: CustomButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                disabled && styles.buttonDisabled,
                style
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
} 