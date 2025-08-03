import { Linking, Alert } from 'react-native';

export interface LinkData {
    uri: string;
    title?: string;
}

/**
 * URL'i güvenli bir şekilde açar
 * @param linkData - Açılacak link bilgileri
 * @param showAlerts - Hata durumunda alert gösterip göstermeyeceği (varsayılan: true)
 */
export const openLink = async (linkData: LinkData | string, showAlerts: boolean = true): Promise<boolean> => {
    try {
        // String olarak gelirse LinkData formatına çevir
        const link = typeof linkData === 'string' ? { uri: linkData } : linkData;

        console.log('Opening link:', link.uri); // Debug için

        if (!link.uri) {
            if (showAlerts) {
                Alert.alert('Bilgi', 'Bu öğe için link bulunmuyor');
            }
            return false;
        }

        // URL'i temizle ve formatla
        let url = link.uri.trim();

        // Eğer URL http:// veya https:// ile başlamıyorsa, https:// ekle
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        console.log('Formatted URL:', url); // Debug için

        // URL'i aç
        await Linking.openURL(url);
        return true;

    } catch (error) {
        console.log('Open link error:', error); // Debug için

        if (showAlerts) {
            // Hata detaylarını göster
            let errorMessage = 'Link açılırken bir hata oluştu';
            const link = typeof linkData === 'string' ? linkData : linkData.uri;

            if (link) {
                errorMessage += `\n\nURL: ${link}`;
            }
            if (error instanceof Error) {
                errorMessage += `\n\nHata: ${error.message}`;
            }

            Alert.alert('Hata', errorMessage);
        }

        return false;
    }
};

/**
 * URL'in geçerli olup olmadığını kontrol eder
 * @param url - Kontrol edilecek URL
 */
export const isValidUrl = (url: string): boolean => {
    try {
        const formattedUrl = url.startsWith('http://') || url.startsWith('https://')
            ? url
            : `https://${url}`;
        new URL(formattedUrl);
        return true;
    } catch {
        return false;
    }
};

/**
 * URL'i formatlar (https:// ekler gerekirse)
 * @param url - Formatlanacak URL
 */
export const formatUrl = (url: string): string => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
        return `https://${trimmedUrl}`;
    }
    return trimmedUrl;
}; 