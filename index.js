/**
 * @format
 */

import {StartupMetrics} from './src/performance/StartupMetrics';

// These run the absolute moment the JavaScript engine starts executing the bundle
StartupMetrics.beginPhase('APP_START');
StartupMetrics.beginPhase('JS_INIT');

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';

StartupMetrics.endPhase('JS_INIT');

AppRegistry.registerComponent(appName, () => App);
