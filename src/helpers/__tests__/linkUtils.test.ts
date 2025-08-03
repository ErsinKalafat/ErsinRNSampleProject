import { Linking, Alert } from 'react-native';
import { openLink, isValidUrl, formatUrl, LinkData } from '../linkUtils';

// Mock React Native modules
jest.mock('react-native', () => ({
    Linking: {
        openURL: jest.fn(),
    },
    Alert: {
        alert: jest.fn(),
    },
}));

describe('linkUtils', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (Linking.openURL as jest.Mock).mockResolvedValue(undefined);
    });

    describe('openLink', () => {
        it('opens a valid URL successfully', async () => {
            const linkData: LinkData = {
                uri: 'https://example.com',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
            expect(result).toBe(true);
        });

        it('opens a URL string successfully', async () => {
            const url = 'https://example.com';

            const result = await openLink(url);

            expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
            expect(result).toBe(true);
        });

        it('adds https:// to URLs without protocol', async () => {
            const linkData: LinkData = {
                uri: 'example.com',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
            expect(result).toBe(true);
        });

        it('adds https:// to URL strings without protocol', async () => {
            const url = 'example.com';

            const result = await openLink(url);

            expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
            expect(result).toBe(true);
        });

        it('trims whitespace from URLs', async () => {
            const linkData: LinkData = {
                uri: '  https://example.com  ',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
            expect(result).toBe(true);
        });

        it('handles http:// URLs correctly', async () => {
            const linkData: LinkData = {
                uri: 'http://example.com',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Linking.openURL).toHaveBeenCalledWith('http://example.com');
            expect(result).toBe(true);
        });

        it('shows alert and returns false for empty URI', async () => {
            const linkData: LinkData = {
                uri: '',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Alert.alert).toHaveBeenCalledWith('Bilgi', 'Bu öğe için link bulunmuyor');
            expect(Linking.openURL).not.toHaveBeenCalled();
            expect(result).toBe(false);
        });

        it('shows alert and returns false for empty URI string', async () => {
            const result = await openLink('');

            expect(Alert.alert).toHaveBeenCalledWith('Bilgi', 'Bu öğe için link bulunmuyor');
            expect(Linking.openURL).not.toHaveBeenCalled();
            expect(result).toBe(false);
        });

        it('handles Linking.openURL errors', async () => {
            const error = new Error('Network error');
            (Linking.openURL as jest.Mock).mockRejectedValue(error);

            const linkData: LinkData = {
                uri: 'https://example.com',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Alert.alert).toHaveBeenCalledWith(
                'Hata',
                expect.stringContaining('Link açılırken bir hata oluştu')
            );
            expect(result).toBe(false);
        });

        it('does not show alerts when showAlerts is false', async () => {
            const error = new Error('Network error');
            (Linking.openURL as jest.Mock).mockRejectedValue(error);

            const linkData: LinkData = {
                uri: 'https://example.com',
                title: 'Example'
            };

            const result = await openLink(linkData, false);

            expect(Alert.alert).not.toHaveBeenCalled();
            expect(result).toBe(false);
        });

        it('includes error details in alert message', async () => {
            const error = new Error('Custom error message');
            (Linking.openURL as jest.Mock).mockRejectedValue(error);

            const linkData: LinkData = {
                uri: 'https://example.com',
                title: 'Example'
            };

            await openLink(linkData);

            expect(Alert.alert).toHaveBeenCalledWith(
                'Hata',
                expect.stringContaining('Custom error message')
            );
        });

        it('handles non-Error objects in catch block', async () => {
            (Linking.openURL as jest.Mock).mockRejectedValue('String error');

            const linkData: LinkData = {
                uri: 'https://example.com',
                title: 'Example'
            };

            const result = await openLink(linkData);

            expect(Alert.alert).toHaveBeenCalledWith(
                'Hata',
                expect.stringContaining('Link açılırken bir hata oluştu')
            );
            expect(result).toBe(false);
        });
    });

    describe('isValidUrl', () => {
        it('returns true for valid URLs with https', () => {
            expect(isValidUrl('https://example.com')).toBe(true);
        });

        it('returns true for valid URLs with http', () => {
            expect(isValidUrl('http://example.com')).toBe(true);
        });

        it('returns true for valid URLs without protocol', () => {
            expect(isValidUrl('example.com')).toBe(true);
        });

        it('returns true for valid URLs with subdomains', () => {
            expect(isValidUrl('https://sub.example.com')).toBe(true);
        });

        it('returns true for valid URLs with paths', () => {
            expect(isValidUrl('https://example.com/path')).toBe(true);
        });

        it('returns true for valid URLs with query parameters', () => {
            expect(isValidUrl('https://example.com?param=value')).toBe(true);
        });

        it('returns false for invalid URLs', () => {
            expect(isValidUrl('not-a-url')).toBe(false);
        });

        it('returns false for empty strings', () => {
            expect(isValidUrl('')).toBe(false);
        });

        it('returns false for strings with spaces', () => {
            expect(isValidUrl('example com')).toBe(false);
        });
    });

    describe('formatUrl', () => {
        it('adds https:// to URLs without protocol', () => {
            expect(formatUrl('example.com')).toBe('https://example.com');
        });

        it('keeps https:// URLs unchanged', () => {
            expect(formatUrl('https://example.com')).toBe('https://example.com');
        });

        it('keeps http:// URLs unchanged', () => {
            expect(formatUrl('http://example.com')).toBe('http://example.com');
        });

        it('trims whitespace from URLs', () => {
            expect(formatUrl('  example.com  ')).toBe('https://example.com');
        });

        it('handles URLs with subdomains', () => {
            expect(formatUrl('sub.example.com')).toBe('https://sub.example.com');
        });

        it('handles URLs with paths', () => {
            expect(formatUrl('example.com/path')).toBe('https://example.com/path');
        });

        it('handles URLs with query parameters', () => {
            expect(formatUrl('example.com?param=value')).toBe('https://example.com?param=value');
        });

        it('handles empty strings', () => {
            expect(formatUrl('')).toBe('https://');
        });

        it('handles strings with only whitespace', () => {
            expect(formatUrl('   ')).toBe('https://');
        });
    });
}); 