import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const profileScreenStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background.loading,
    },
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.loading,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: colors.text.darkGray,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text.dark,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: colors.text.darkGray,
        marginBottom: 30,
    },
    button: {
        backgroundColor: colors.status.info,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.text.white,
        fontSize: 16,
        fontWeight: '600',
    },
    profileSection: {
        backgroundColor: colors.background.white,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: colors.overlay.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    avatarContainer: {
        marginBottom: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.status.info,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: colors.text.white,
        fontSize: 32,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text.dark,
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: colors.text.darkGray,
        marginBottom: 10,
    },
    userBio: {
        fontSize: 14,
        color: colors.text.darkGray,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 20,
    },
    userLocation: {
        fontSize: 14,
        color: colors.status.info,
    },
    errorContainer: {
        backgroundColor: colors.status.warning,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    errorText: {
        color: colors.status.error,
        fontSize: 14,
        textAlign: 'center',
    },
    actionsSection: {
        backgroundColor: colors.background.white,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: colors.overlay.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    actionButton: {
        backgroundColor: colors.background.lightCard,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.border.card,
    },
    actionButtonText: {
        fontSize: 16,
        color: colors.text.dark,
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: colors.status.error,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    logoutButtonText: {
        fontSize: 16,
        color: colors.text.white,
        textAlign: 'center',
        fontWeight: '600',
    },
    statusSection: {
        backgroundColor: colors.background.white,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: colors.overlay.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statusTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text.dark,
        marginBottom: 15,
    },
    statusText: {
        fontSize: 14,
        color: colors.text.darkGray,
        marginBottom: 5,
    },
}); 