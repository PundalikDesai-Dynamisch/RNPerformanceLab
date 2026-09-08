/**
 * App.tsx
 *
 * Root component for the RN Performance Lab.
 * Wraps the app in SafeAreaProvider and renders the navigator.
 */

import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigation/AppNavigator';
import {StartupMetrics} from '../performance/StartupMetrics';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  StartupMetrics.beginPhase('NAV_INIT');

  useEffect(() => {
    StartupMetrics.endPhase('NAV_INIT');
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
