export const primary = {
    green: 'rgba(40, 175, 110, 1)',
    greenLight: 'rgba(41, 187, 136, 0.04)',
    greenBorder: 'rgba(41, 187, 137, 0.18)',
    greenDark: 'rgba(44, 204, 128, 1)',
};

export const text = {
    primary: 'rgba(19, 35, 27, 1)',
    secondary: 'rgba(19, 35, 27, 0.8)',
    white: 'rgba(255, 255, 255, 1)',
    white07: 'rgba(255, 255, 255, 0.7)',
    white08: 'rgba(255, 255, 255, 0.8)',
    white05: 'rgba(255, 255, 255, 0.5)',
    white052: 'rgba(255, 255, 255, 0.52)',
    gray: 'rgba(175, 175, 175, 1)',
    grayIcon: 'rgba(189, 189, 189, 1)',
    darkGray: '#666',
    dark: '#333',
    darkGreen: '#13231B',
    onboardingSubtext: 'rgba(89, 113, 101, 0.7)',
    pageDotInactive: 'rgba(19, 35, 27, 0.25)',
    pageDotActive: 'rgba(19, 35, 27, 1)',
};

export const background = {
    white: 'rgba(255, 255, 255, 1)',
    white05: 'rgba(255, 255, 255, 0.05)',
    white08: 'rgba(255, 255, 255, 0.08)',
    white09: 'rgba(255, 255, 255, 0.9)',
    lightGray: 'rgba(251, 250, 250, 1)',
    veryLightGray: 'rgba(250, 250, 250, 1)',
    darkGreen: 'rgba(16, 30, 23, 1)',
    loading: '#f5f5f5',
    card: '#fff',
    lightCard: '#f8f9fa',
    transparent: 'transparent',
    onboarding: 'rgba(250, 250, 250, 1)',
};

export const border = {
    white: 'rgba(255, 255, 255, 1)',
    white03: 'rgba(255, 255, 255, 0.3)',
    gray: 'rgba(60, 60, 67, 0.25)',
    lightGray: '#E5E5EA',
    card: '#e9ecef',
    tabBar: '#E5E5EA',
};

export const status = {
    success: primary.green,
    error: '#FF3B30',
    warning: '#FFE5E5',
    info: '#007AFF',
    loading: '#007AFF',
};

export const overlay = {
    black03: 'rgba(0, 0, 0, 0.3)',
    black04: 'rgba(0, 0, 0, 0.4)',
    black05: 'rgba(0, 0, 0, 0.5)',
    shadow: '#000',
};

export const gradient = {
    transparentToGreen: ['rgba(255, 255, 255, 0)', primary.greenLight],
    transparentToWhite: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
};

export const custom = {
    searchIcon: '#ABABAB',
    premiumBackground: background.darkGreen,
    buttonPrimary: primary.green,
    buttonSecondary: background.white,
    tabActive: primary.green,
    tabInactive: text.grayIcon,
    centerButtonBorder: 'rgba(44, 204, 128, 1)',
    centerButtonBackground: 'rgba(40, 175, 110, 1)',
    centerButtonIcon: '#fff',
    tabBarBackground: '#fff',
    tabBarActiveTint: 'rgba(40, 175, 110, 1)',
    tabBarInactiveTint: 'rgba(189, 189, 189, 1)',
};

export const colors = {
    primary,
    text,
    background,
    border,
    status,
    overlay,
    gradient,
    custom,
};

export default colors; 