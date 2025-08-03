import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const myGardenScreenStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background.loading,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
        textAlign: 'center',
    },
}); 