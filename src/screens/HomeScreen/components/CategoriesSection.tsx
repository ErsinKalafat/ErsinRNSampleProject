import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../../../components/CustomText';
import { CategoryData } from '../../../store/slices/categoriesSlice';
import { homeScreenStyles as styles } from '../../../styles/homeScreenStyles';

interface CategoriesSectionProps {
    categories: CategoryData[];
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
    return (
        <>
            {categories.map((category: CategoryData) => (
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', 'rgba(41, 187, 136, 0.04)']}
                    key={category.id}
                    style={styles.categoryContainer}
                >
                    <Image
                        source={{ uri: category.image.url }}
                        style={styles.categoryImage}
                        resizeMode='stretch'
                    />
                    <View style={styles.categoryOverlay}>
                        <CustomText style={styles.categoryTitle}>
                            {category.title}
                        </CustomText>
                    </View>
                </LinearGradient>
            ))}
        </>
    );
} 