import { StyleSheet } from 'react-native';
import { moderateScale, scaleFont } from '../helpers/sizeNormalize';
import { background, text } from '../constants/colors';

export const onboardingScreenStyles = StyleSheet.create({
    onboardingContainer: {
        flex: 1,
        backgroundColor: background.onboarding
    },
    topSection: {
        flex: 1,
        paddingTop: moderateScale(50),
    },
    bottomSection: {
        paddingBottom: moderateScale(20),
    },
    onboardingTitleImage: {
        height: moderateScale(85),
    },
    onboardingContentImage: {
        height: moderateScale(499),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    pageDot: {
        width: 6,
        height: 6,
        backgroundColor: text.pageDotInactive,
    },
    pageDotActive: {
        backgroundColor: text.pageDotActive,
        width: 10,
        height: 10,
    },
    getStartedSubtext: {
        color: text.onboardingSubtext,
        fontSize: scaleFont(11),
        fontWeight: '400',
        lineHeight: moderateScale(15),
        marginTop: moderateScale(10),
        letterSpacing: moderateScale(0.07)
    },
    underlinedText: {
        textDecorationLine: 'underline',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: moderateScale(499),
        justifyContent: 'center',
        alignItems: 'center',
    },
    artworkImage: {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
    },
    leafsImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        paddingHorizontal: moderateScale(20),
    },
}); 