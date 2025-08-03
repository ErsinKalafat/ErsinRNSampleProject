import SplashScreen from 'react-native-splash-screen';
import { SPLASH_CONFIG } from '../constants/splashConfig';

export class SplashScreenHelper {
    private static isVisible = false;
    private static hideTimer: NodeJS.Timeout | null = null;

    /**
     * Splash screen'i gösterir
     */
    static show() {
        try {
            SplashScreen.show();
            this.isVisible = true;
            console.log('✅ Splash screen gösterildi');
        } catch (error) {
            console.error('❌ Splash screen gösterilirken hata:', error);
        }
    }

    /**
     * Splash screen'i gizler
     */
    static hide() {
        try {
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }

            // Splash screen'i gizlemeden önce kısa bir bekleme
            setTimeout(() => {
                try {
                    SplashScreen.hide();
                    this.isVisible = false;
                    console.log('✅ Splash screen gizlendi');
                } catch (error) {
                    console.error('❌ Splash screen gizlenirken hata:', error);
                }
            }, 500);
        } catch (error) {
            console.error('❌ Splash screen gizlenirken hata:', error);
        }
    }

    /**
     * Splash screen'i belirtilen süre sonra gizler
     */
    static hideAfterDelay(duration: number = SPLASH_CONFIG.DURATION) {
        console.log(`⏰ Splash screen ${duration}ms sonra gizlenecek`);

        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
        }

        this.hideTimer = setTimeout(() => {
            this.hide();
        }, duration);
    }

    /**
     * Splash screen'in görünür olup olmadığını kontrol eder
     */
    static isSplashVisible(): boolean {
        return this.isVisible;
    }

    /**
     * Splash screen'i zorla gizler (acil durumlar için)
     */
    static forceHide() {
        console.log('🚨 Splash screen zorla gizleniyor');
        this.hide();
    }
} 