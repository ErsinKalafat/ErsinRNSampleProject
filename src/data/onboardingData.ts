export interface OnboardingItem {
    id: number;
    title?: any;
    image?: any;
    showIndicator: boolean;
}

export const onboardingData: OnboardingItem[] = [
    {
        id: 1,
        title: require('../assets/images/Onboarding1Title.png'),
        image: require('../assets/images/Onboarding1.png'),
        showIndicator: false
    },
    {
        id: 2,
        title: require('../assets/images/Onboarding2Title.png'),
        image: require('../assets/images/Onboarding2.png'),
        showIndicator: true
    },
    {
        id: 3,
        title: require('../assets/images/Onboarding3Title.png'),
        image: require('../assets/images/Onboarding3.png'),
        showIndicator: true
    },
    {
        id: 4,
        showIndicator: false
    }
]; 