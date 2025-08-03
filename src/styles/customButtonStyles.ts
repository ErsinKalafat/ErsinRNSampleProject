import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { moderateScale, scaleFont } from '../helpers/sizeNormalize';

export const customButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary.green,
        paddingVertical: moderateScale(18),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        width: '100%',
        marginBottom: moderateScale(5),
    },
    buttonDisabled: {
        backgroundColor: colors.text.gray,
        opacity: 0.6,
    },
    buttonText: {
        color: colors.text.white,
        fontSize: scaleFont(15),
        fontWeight: '500',
        fontFamily: 'Rubik-Regular',
    },
}); 