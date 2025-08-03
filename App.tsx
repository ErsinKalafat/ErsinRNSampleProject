import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { useAppDispatch, useAppSelector } from './src/store/hooks';
import { setUser, setToken } from './src/store/slices/userSlice';
import { loadOnboardingStatus, saveOnboardingStatus } from './src/store/slices/onboardingSlice';
import './src/i18n';

function AppContent() {
  const dispatch = useAppDispatch();
  const { isCompleted, onboardingSeen } = useAppSelector((state) => state.onboarding);

  useEffect(() => {
    dispatch(loadOnboardingStatus());
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
