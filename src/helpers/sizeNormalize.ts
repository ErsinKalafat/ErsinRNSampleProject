import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const widthScale = SCREEN_WIDTH / baseWidth;
const heightScale = SCREEN_HEIGHT / baseHeight;

export const moderateScale = (size: number, factor = 0.5) => {
    return size + (widthScale - 1) * factor * size;
};

export const scaleFont = (size: number) => {
    const newSize = size * widthScale;
    if (PixelRatio.getFontScale() > 1) {
        return moderateScale(newSize, 0.3);
    }
    return moderateScale(newSize, 0.3);
};

export const scaleHeight = (size: number) => {
    return size * heightScale;
};

export const scaleWidth = (size: number) => {
    return size * widthScale;
};

export const getScreenWidth = () => SCREEN_WIDTH;
export const getScreenHeight = () => SCREEN_HEIGHT;

export const isSmallDevice = () => SCREEN_WIDTH < 375;

export const isLargeDevice = () => SCREEN_WIDTH > 414; 