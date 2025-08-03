import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';
import { scaleFont } from '../helpers/sizeNormalize';
import colors from '../constants/colors';

export interface CustomTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children, ...props }) => {
    const defaultStyle: TextStyle = {
        fontSize: scaleFont(16),
        fontFamily: 'Rubik-Regular',
        fontWeight: '500',
        color: colors.text.primary,
    };

    return (
        <Text style={[defaultStyle, style]} {...props}>
            {children}
        </Text>
    );
};

export default CustomText; 