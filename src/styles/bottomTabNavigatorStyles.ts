import { StyleSheet } from 'react-native';
import { moderateScale } from '../helpers/sizeNormalize';
import { background, border, custom } from '../constants/colors';

export const bottomTabNavigatorStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: custom.tabBarBackground,
        borderTopWidth: 1,
        borderTopColor: border.tabBar,
        paddingTop: 5,
    },
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
    tabIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIconText: {
        fontSize: 24,
    },
    centerButtonInner: {
        width: 64,
        height: 64,
        borderRadius: 30,
        borderWidth: 4,
        marginBottom: moderateScale(16),
        borderColor: custom.centerButtonBorder,
        backgroundColor: custom.centerButtonBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerButtonIcon: {
        fontSize: 28,
        color: custom.centerButtonIcon,
    },
}); 