// index.js
import { AppRegistry } from 'react-native';
import App from './App'; // App.js 파일로 변경해야 할 수도 있습니다.
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);