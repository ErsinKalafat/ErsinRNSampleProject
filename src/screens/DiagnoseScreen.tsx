import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import CustomText from '../components/CustomText';
import { diagnoseScreenStyles as styles } from '../styles/diagnoseScreenStyles';

export default function DiagnoseScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <CustomText style={styles.title}>Diagnose Screen</CustomText>
                <CustomText style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab laudantium explicabo quasi ex aspernatur quia distinctio ducimus ipsum omnis illum assumenda quos iusto eum harum corrupti enim, ea quas.</CustomText>
            </View>
        </SafeAreaView>
    );
} 