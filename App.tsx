import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { useAppDispatch, useAppSelector } from './src/store/hooks';
import { setUser, setToken } from './src/store/slices/userSlice';
import { loadOnboardingStatus, saveOnboardingStatus } from './src/store/slices/onboardingSlice';
import { SplashScreenHelper } from './src/helpers/splashScreenHelper';
import { SPLASH_CONFIG } from './src/constants/splashConfig';
import './src/i18n';

function AppContent() {
  const dispatch = useAppDispatch();
  const { isCompleted, onboardingSeen } = useAppSelector((state) => state.onboarding);

  useEffect(() => {
    // Splash screen'i daha uzun süre göstermek için helper kullanıyoruz
    SplashScreenHelper.hideAfterDelay(SPLASH_CONFIG.DURATION);

    console.log(`🎬 Splash screen ${SPLASH_CONFIG.DURATION}ms süreyle gösterilecek`);

    // Asenkron işlemleri başlat
    const initializeApp = async () => {
      try {
        // Splash screen'in gösterilmesi için daha uzun bekleme
        await new Promise(resolve => setTimeout(resolve, 3000));

        await dispatch(loadOnboardingStatus());

        // Test için otomatik login
        const testUser = {
          id: '1',
          name: 'Ersin Kalafat',
          email: 'ersin0105@gmail.com',
          desc: 'React Native Developer',
          location: 'Üsküdar, İstanbul, Türkiye'
        };
        dispatch(setUser(testUser));
        dispatch(setToken('temp-token-ersin'));

        console.log('✅ Uygulama başlatma işlemleri tamamlandı');
      } catch (error) {
        console.error('❌ Uygulama başlatma hatası:', error);
        // Hata durumunda splash screen'i zorla gizle
        setTimeout(() => {
          SplashScreenHelper.forceHide();
        }, 2000);
      }
    };

    initializeApp();

    // Cleanup function - daha güvenli
    return () => {
      // Cleanup sırasında splash screen'i hemen gizleme
      setTimeout(() => {
        SplashScreenHelper.forceHide();
      }, 1000);
    };
  }, [dispatch]);

  if (onboardingSeen) {
    return null;
  }

  if (!isCompleted) {
    return <OnboardingScreen />;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
