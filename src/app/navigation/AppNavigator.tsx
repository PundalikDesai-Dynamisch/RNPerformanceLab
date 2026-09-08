/**
 * AppNavigator.tsx
 *
 * Root navigation configuration for the RN Performance Lab.
 * Uses React Navigation Native Stack for minimal overhead.
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {Experiment01Screen} from '../../experiments/experiment01-startup/Experiment01Screen';
import {Experiment02Screen} from '../../experiments/experiment02-rerenders/Experiment02Screen';
import {Experiment03Screen} from '../../experiments/experiment03-js-calculation/Experiment03Screen';
import {Experiment04Screen} from '../../experiments/experiment04-large-flatlist/Experiment04Screen';
import {Experiment05Screen} from '../../experiments/experiment05-expensive-item/Experiment05Screen';
import {Experiment06Screen} from '../../experiments/experiment06-animation/Experiment06Screen';
import {Experiment07Screen} from '../../experiments/experiment07-images/Experiment07Screen';

export type RootStackParamList = {
  Home: undefined;
  Experiment01: undefined;
  Experiment02: undefined;
  Experiment03: undefined;
  Experiment04: undefined;
  Experiment05: undefined;
  Experiment06: undefined;
  Experiment07: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#13131A',
  },
  headerTintColor: '#E0E0E0',
  headerTitleStyle: {
    fontWeight: '600' as const,
  },
  contentStyle: {
    backgroundColor: '#13131A',
  },
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'RN Performance Lab', headerShown: false}}
        />
        <Stack.Screen
          name="Experiment01"
          component={Experiment01Screen}
          options={{title: 'Exp 01 — Startup Time'}}
        />
        <Stack.Screen
          name="Experiment02"
          component={Experiment02Screen}
          options={{title: 'Exp 02 — Re-renders'}}
        />
        <Stack.Screen
          name="Experiment03"
          component={Experiment03Screen}
          options={{title: 'Exp 03 — Heavy JS'}}
        />
        <Stack.Screen
          name="Experiment04"
          component={Experiment04Screen}
          options={{title: 'Exp 04 — Large FlatList'}}
        />
        <Stack.Screen
          name="Experiment05"
          component={Experiment05Screen}
          options={{title: 'Exp 05 — Expensive Item'}}
        />
        <Stack.Screen
          name="Experiment06"
          component={Experiment06Screen}
          options={{title: 'Exp 06 — Animation'}}
        />
        <Stack.Screen
          name="Experiment07"
          component={Experiment07Screen}
          options={{title: 'Exp 07 — Images'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
