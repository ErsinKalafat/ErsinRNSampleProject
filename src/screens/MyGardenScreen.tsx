import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import CustomText from '../components/CustomText';
import { myGardenScreenStyles as styles } from '../styles/myGardenScreenStyles';

export default function MyGardenScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <CustomText style={styles.title}>My Garden Screen</CustomText>
                <CustomText style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem, impedit illum tempora earum repellat quas sint minima eligendi provident, perspiciatis suscipit numquam laborum. Ab aspernatur distinctio temporibus ad dicta.</CustomText>
            </View>
        </SafeAreaView>
    );
} 