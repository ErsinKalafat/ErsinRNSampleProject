import React, { useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import CustomText from '../components/CustomText';
import { profileScreenStyles as styles } from '../styles/profileScreenStyles';

export default function ProfileScreen() {
    const dispatch = useAppDispatch();
    const { user, loading, error, isAuthenticated } = useAppSelector((state: RootState) => state.user as any);

    useEffect(() => {
        if (isAuthenticated) {
            // reduxta kullanıcı var
            console.log('Oturumdaki kullanıcı:', user);

        }
    }, [dispatch, isAuthenticated]);

    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <CustomText style={styles.loadingText}>Profil yükleniyor...</CustomText>
                </View>
            </SafeAreaView>
        );
    }

    if (!isAuthenticated || !user) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View style={styles.container}>
                    <CustomText style={styles.title}>Profil</CustomText>
                    <CustomText style={styles.subtitle}>Giriş yapmanız gerekiyor</CustomText>
                    <TouchableOpacity style={styles.button}>
                        <CustomText style={styles.buttonText}>Giriş Yap</CustomText>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView style={styles.container}>
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <CustomText style={styles.avatarText}>
                                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </CustomText>
                        </View>
                    </View>

                    <CustomText style={styles.userName}>{user.name}</CustomText>
                    <CustomText style={styles.userEmail}>{user.email}</CustomText>

                    {user.desc && (
                        <CustomText style={styles.userBio}>{user.desc}</CustomText>
                    )}

                    {user.location && (
                        <CustomText style={styles.userLocation}>{user.location}</CustomText>
                    )}
                </View>

                {error && (
                    <View style={styles.errorContainer}>
                        <CustomText style={styles.errorText}>{error}</CustomText>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
} 