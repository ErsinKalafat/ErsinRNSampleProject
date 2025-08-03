import { StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';
import { moderateScale, scaleFont } from '../helpers/sizeNormalize';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const baseText = {
    fontFamily: 'Rubik-Regular',
    color: colors.text.white,
};

const baseCard = {
    borderRadius: moderateScale(12),
    backgroundColor: colors.background.white08,
};

export const premiumScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.background.darkGreen
    },
    imageContainer: {
        height: SCREEN_HEIGHT * 0.6,
    },
    premiumImage: {
        height: '100%',
    },
    contentContainer: {
        paddingTop: moderateScale(24),
    },
    headerSection: {
        alignItems: 'flex-start',
    },
    imageTitle: {
        ...baseText,
        fontSize: scaleFont(30),
        fontFamily: 'Rubik-Bold',
        fontWeight: '800',
        marginBottom: moderateScale(5),
    },
    thinPageTitle: {
        fontSize: scaleFont(24),
        fontFamily: 'Rubik-Light',
        fontWeight: '300',
    },
    imageSubtitle: {
        ...baseText,
        fontFamily: 'Rubik-Light',
        fontSize: scaleFont(17),
        color: colors.text.white07,
        letterSpacing: moderateScale(0.38),
        lineHeight: scaleFont(24),
    },
    scrollContainer: {
        paddingVertical: moderateScale(16),
        justifyContent: 'center',
        marginRight: moderateScale(-24)
    },
    featuresScroll: {
        flex: 1
    },
    featureCard: {
        ...baseCard,
        width: moderateScale(156),
        paddingVertical: moderateScale(15),
        marginRight: moderateScale(8),
        paddingLeft: moderateScale(16),
        gap: 20
    },
    featureText: {
        ...baseText,
        textAlign: 'left',
    },
    featureIconWrapper: {
        top: 0,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(8),
        backgroundColor: 'rgba(0, 0, 0, 0.24)',
        width: moderateScale(36),
        height: moderateScale(35.68),
    },
    featureIcon: {
        color: colors.text.white,
    },
    featureTitle: {
        fontSize: scaleFont(20),
        fontFamily: 'Rubik-Bold',
        fontWeight: '500',
        lineHeight: moderateScale(24)
    },
    featureSubtitle: {
        fontSize: scaleFont(13),
        color: colors.text.white08,
        lineHeight: moderateScale(18)
    },
    radiusView: {
        width: '100%',
        height: moderateScale(60),
        backgroundColor: colors.background.white05,
        borderRadius: moderateScale(12),
        padding: moderateScale(15),
        justifyContent: 'center',
        borderColor: colors.border.white03,
        borderWidth: 0.5,
        position: 'relative',
    },
    radiusViewSelected: {
        borderColor: colors.primary.green,
        borderWidth: 1.5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.border.white,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    textContainer: {
        flexDirection: 'column',
    },
    checkboxTitle: {
        ...baseText,
        fontSize: scaleFont(14),
        fontFamily: 'Rubik-Bold',
        fontWeight: '700',
    },
    checkboxDescription: {
        ...baseText,
        fontFamily: 'Rubik-Light',
        fontSize: scaleFont(12),
        color: colors.text.white08,
        fontWeight: '400',
    },
    checkboxChecked: {
        backgroundColor: colors.primary.green,
        borderColor: colors.primary.green,
    },
    checkboxDot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: colors.text.white,
    },
    bottomSection: {
        alignItems: 'center',
        marginTop: moderateScale(10),
    },
    bottomText: {
        ...baseText,
        fontSize: scaleFont(9),
        color: colors.text.white052,
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: moderateScale(10),
    },
    bottomButtons: {
        marginBottom: moderateScale(24),
    },
    bottomButtonText: {
        ...baseText,
        fontSize: scaleFont(11),
        color: colors.text.white05,
        fontWeight: '400',
        marginHorizontal: moderateScale(4),
    },
    bottomButtonSeparator: {
        ...baseText,
        fontSize: scaleFont(12),
        color: colors.text.white08,
        fontWeight: '400',
        marginHorizontal: moderateScale(4),
    },
    closeButton: {
        position: 'absolute',
        top: moderateScale(60),
        right: moderateScale(16),
        zIndex: 1000,
        padding: moderateScale(10),
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 100
    },
    saveBadge: {
        position: 'absolute',
        top: moderateScale(-1),
        right: moderateScale(-1),
        paddingRight: moderateScale(10),
        paddingLeft: moderateScale(13),
        paddingVertical: moderateScale(7),
        backgroundColor: colors.primary.green,
        borderTopLeftRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(14),
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(0),
    },
    saveBadgeText: {
        ...baseText,
        fontSize: scaleFont(10),
        fontWeight: '500',
        color: colors.text.white,
    },
}); 