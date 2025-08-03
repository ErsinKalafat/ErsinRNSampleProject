import { StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';
import { moderateScale, scaleFont } from '../helpers/sizeNormalize';

export const homeScreenStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background.lightGray,
    },
    container: {
        flex: 1,
        gap: moderateScale(24)
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.loading,
    },
    loadingText: {
        marginTop: 10,
        fontSize: scaleFont(16),
        color: colors.text.darkGray,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.loading,
        padding: moderateScale(20),
    },
    errorText: {
        fontSize: scaleFont(16),
        color: colors.status.error,
        textAlign: 'center',
        marginBottom: 20,
    },
    retryText: {
        fontSize: scaleFont(16),
        color: colors.status.info,
        textDecorationLine: 'underline',
    },
    backgroundContainer: {
        position: 'relative',
        width: '100%',
        height: moderateScale(175),
    },
    overlayContent: {
        paddingHorizontal: 24,
        paddingTop: moderateScale(50),
        justifyContent: 'flex-start',
        gap: moderateScale(Platform.OS === 'android' ? 1 : 6)
    },
    greetingText: {
        fontSize: scaleFont(24),
        marginBottom: 4,
        fontFamily: 'Rubik-Medium',
    },
    greetingTopText: {
        fontSize: scaleFont(16),
        fontWeight: '400',
        // opacity: 0.8,
    },
    searchContainer: {
        height: moderateScale(44),
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: colors.background.white09,
        borderRadius: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
        borderWidth: 0.2,
        borderColor: colors.border.gray
    },
    searchInput: {
        flex: 1,
        fontSize: scaleFont(15.5),
        color: colors.text.primary,
        fontFamily: 'Rubik-Regular',
        backgroundColor: colors.background.transparent,
        fontWeight: '400',
        letterSpacing: 0.07
    },
    searchIconStyle: {
        marginRight: moderateScale(12),
    },
    section: {
        marginBottom: 20,
        borderRadius: 12,
        marginLeft: 24,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: moderateScale(24)
    },
    sectionTitle: {
        fontSize: scaleFont(15),
        letterSpacing: -0.24
    },
    scrollView: {
        flexGrow: 0,
    },
    scrollContainer: {
        paddingRight: 15,
    },
    questionContainer: {
        width: moderateScale(240),
        height: moderateScale(164),
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
        marginRight: moderateScale(16)
    },
    questionImage: {
        width: '100%',
        height: '100%',
    },
    questionOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
    },
    questionTitle: {
        color: colors.text.white,
        fontSize: scaleFont(14),
        fontWeight: '500',
        marginBottom: 2,
    },
    questionSubtitle: {
        color: colors.text.white,
        fontSize: scaleFont(12),
        opacity: 0.8,
    },
    categoryContainer: {
        width: moderateScale(158),
        height: moderateScale(152),
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 0.5,
        borderColor: colors.primary.greenBorder,
        // backgroundColor: 'rgba(244, 246, 246, 1)',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    categoryOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    categoryTitle: {
        color: colors.text.darkGreen,
        lineHeight: 21,
    },
    premiumImage: {
        width: moderateScale(327),
        height: moderateScale(64),
        marginTop: moderateScale(24),
    },
    backgroundLeaf: {
        width: '100%',
        height: moderateScale(175),
    },
}); 