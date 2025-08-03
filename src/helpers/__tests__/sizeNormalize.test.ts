import { Dimensions, PixelRatio } from 'react-native';
import {
    moderateScale,
    scaleFont,
    scaleHeight,
    scaleWidth,
    getScreenWidth,
    getScreenHeight,
    isSmallDevice,
    isLargeDevice,
} from '../sizeNormalize';

// Mock React Native modules
jest.mock('react-native', () => ({
    Dimensions: {
        get: jest.fn(),
    },
    PixelRatio: {
        getFontScale: jest.fn(),
    },
}));

describe('sizeNormalize', () => {
    const mockDimensions = {
        width: 375,
        height: 812,
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (Dimensions.get as jest.Mock).mockReturnValue(mockDimensions);
        (PixelRatio.getFontScale as jest.Mock).mockReturnValue(1);
    });

    describe('moderateScale', () => {
        it('scales size correctly with default factor', () => {
            const size = 100;
            const result = moderateScale(size);

            // With default factor 0.5 and screen width 375 (base width 375)
            // widthScale = 375/375 = 1
            // result = 100 + (1-1) * 0.5 * 100 = 100
            expect(result).toBe(100);
        });

        it('scales size correctly with custom factor', () => {
            const size = 100;
            const factor = 0.3;
            const result = moderateScale(size, factor);

            // widthScale = 375/375 = 1
            // result = 100 + (1-1) * 0.3 * 100 = 100
            expect(result).toBe(100);
        });

        it('scales size correctly on larger screen', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 896 });

            const size = 100;
            const result = moderateScale(size);

            // widthScale = 414/375 = 1.104
            // result = 100 + (1.104-1) * 0.5 * 100 = 100 + 5.2 = 105.2
            expect(result).toBeCloseTo(105.2, 1);
        });

        it('scales size correctly on smaller screen', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 320, height: 568 });

            const size = 100;
            const result = moderateScale(size);

            // widthScale = 320/375 = 0.853
            // result = 100 + (0.853-1) * 0.5 * 100 = 100 - 7.35 = 92.65
            expect(result).toBeCloseTo(92.65, 1);
        });

        it('handles zero size', () => {
            const result = moderateScale(0);
            expect(result).toBe(0);
        });

        it('handles negative size', () => {
            const result = moderateScale(-50);
            expect(result).toBe(-50);
        });
    });

    describe('scaleFont', () => {
        it('scales font size correctly with normal font scale', () => {
            (PixelRatio.getFontScale as jest.Mock).mockReturnValue(1);

            const size = 16;
            const result = scaleFont(size);

            // widthScale = 375/375 = 1
            // newSize = 16 * 1 = 16
            // result = moderateScale(16, 0.3) = 16 + (1-1) * 0.3 * 16 = 16
            expect(result).toBe(16);
        });

        it('scales font size correctly with increased font scale', () => {
            (PixelRatio.getFontScale as jest.Mock).mockReturnValue(1.2);

            const size = 16;
            const result = scaleFont(size);

            // widthScale = 375/375 = 1
            // newSize = 16 * 1 = 16 (font scale > 1 but still uses moderateScale)
            // result = moderateScale(16, 0.3) = 16 + (1-1) * 0.3 * 16 = 16
            expect(result).toBe(16);
        });

        it('scales font size correctly on larger screen', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 896 });

            const size = 16;
            const result = scaleFont(size);

            // widthScale = 414/375 = 1.104
            // newSize = 16 * 1.104 = 17.664
            // result = moderateScale(17.664, 0.3) = 17.664 + (1.104-1) * 0.3 * 17.664
            expect(result).toBeCloseTo(18.2, 1);
        });

        it('handles zero font size', () => {
            const result = scaleFont(0);
            expect(result).toBe(0);
        });
    });

    describe('scaleHeight', () => {
        it('scales height correctly', () => {
            const size = 100;
            const result = scaleHeight(size);

            // heightScale = 812/812 = 1
            // result = 100 * 1 = 100
            expect(result).toBe(100);
        });

        it('scales height correctly on different screen size', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 375, height: 667 });

            const size = 100;
            const result = scaleHeight(size);

            // heightScale = 667/812 = 0.821
            // result = 100 * 0.821 = 82.1
            expect(result).toBeCloseTo(82.1, 1);
        });

        it('handles zero height', () => {
            const result = scaleHeight(0);
            expect(result).toBe(0);
        });
    });

    describe('scaleWidth', () => {
        it('scales width correctly', () => {
            const size = 100;
            const result = scaleWidth(size);

            // widthScale = 375/375 = 1
            // result = 100 * 1 = 100
            expect(result).toBe(100);
        });

        it('scales width correctly on different screen size', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 812 });

            const size = 100;
            const result = scaleWidth(size);

            // widthScale = 414/375 = 1.104
            // result = 100 * 1.104 = 110.4
            expect(result).toBeCloseTo(110.4, 1);
        });

        it('handles zero width', () => {
            const result = scaleWidth(0);
            expect(result).toBe(0);
        });
    });

    describe('getScreenWidth', () => {
        it('returns current screen width', () => {
            const result = getScreenWidth();
            expect(result).toBe(375);
        });

        it('returns updated screen width when dimensions change', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 896 });

            const result = getScreenWidth();
            expect(result).toBe(414);
        });
    });

    describe('getScreenHeight', () => {
        it('returns current screen height', () => {
            const result = getScreenHeight();
            expect(result).toBe(812);
        });

        it('returns updated screen height when dimensions change', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 375, height: 667 });

            const result = getScreenHeight();
            expect(result).toBe(667);
        });
    });

    describe('isSmallDevice', () => {
        it('returns true for small devices', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 320, height: 568 });

            const result = isSmallDevice();
            expect(result).toBe(true);
        });

        it('returns false for devices with width >= 375', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 375, height: 812 });

            const result = isSmallDevice();
            expect(result).toBe(false);
        });

        it('returns false for large devices', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 896 });

            const result = isSmallDevice();
            expect(result).toBe(false);
        });
    });

    describe('isLargeDevice', () => {
        it('returns true for large devices', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 428, height: 926 });

            const result = isLargeDevice();
            expect(result).toBe(true);
        });

        it('returns false for devices with width <= 414', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 414, height: 896 });

            const result = isLargeDevice();
            expect(result).toBe(false);
        });

        it('returns false for small devices', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 375, height: 812 });

            const result = isLargeDevice();
            expect(result).toBe(false);
        });
    });

    describe('edge cases', () => {
        it('handles very small screen dimensions', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 200, height: 300 });

            expect(moderateScale(100)).toBeCloseTo(53.33, 1);
            expect(scaleWidth(100)).toBeCloseTo(53.33, 1);
            expect(scaleHeight(100)).toBeCloseTo(36.95, 1);
            expect(isSmallDevice()).toBe(true);
            expect(isLargeDevice()).toBe(false);
        });

        it('handles very large screen dimensions', () => {
            (Dimensions.get as jest.Mock).mockReturnValue({ width: 600, height: 1000 });

            expect(moderateScale(100)).toBeCloseTo(160, 1);
            expect(scaleWidth(100)).toBeCloseTo(160, 1);
            expect(scaleHeight(100)).toBeCloseTo(123.15, 1);
            expect(isSmallDevice()).toBe(false);
            expect(isLargeDevice()).toBe(true);
        });

        it('handles decimal font scale values', () => {
            (PixelRatio.getFontScale as jest.Mock).mockReturnValue(1.5);

            const result = scaleFont(16);
            expect(result).toBe(16); // Still uses moderateScale with 0.3 factor
        });
    });
}); 