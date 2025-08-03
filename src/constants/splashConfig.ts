// Splash Screen Konfigürasyonu
export const SPLASH_CONFIG = {
  // Splash screen'in gösterileceği süre (milisaniye cinsinden)
  DURATION: 2000, // 35 saniye

  // Minimum gösterim süresi (milisaniye cinsinden)
  MIN_DURATION: 1000, // 25 saniye

  // Maksimum gösterim süresi (milisaniye cinsinden)
  MAX_DURATION: 3000, // 45 saniye
};

// Splash screen süresini ayarlamak için kullanılan fonksiyon
export const setSplashDuration = (duration: number) => {
  if (duration < SPLASH_CONFIG.MIN_DURATION) {
    console.warn(`Splash screen süresi çok kısa. Minimum süre: ${SPLASH_CONFIG.MIN_DURATION}ms`);
    return SPLASH_CONFIG.MIN_DURATION;
  }

  if (duration > SPLASH_CONFIG.MAX_DURATION) {
    console.warn(`Splash screen süresi çok uzun. Maksimum süre: ${SPLASH_CONFIG.MAX_DURATION}ms`);
    return SPLASH_CONFIG.MAX_DURATION;
  }

  return duration;
}; 