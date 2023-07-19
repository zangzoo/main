import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // 이 예제에서는 Ionicons 아이콘을 사용합니다.

import map from './map';
import star from './star';
import clock from './clock';
import mypage from './mypage';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="map" // 첫 화면으로 보여줄 페이지를 main으로 설정
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'map') {
            iconName = focused ? 'location' : 'location';
          } else if (route.name === 'star') {
            iconName = focused ? 'star' : 'star';
          } else if (route.name === 'clock') {
            iconName = focused ? 'timer' : 'timer';
          } else if (route.name === 'mypage') {
            iconName = focused ? 'person-circle' : 'person-circle';
          }
          

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={32} color={EEB33F} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'EEB33F',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="main" component={main} />
      <Tab.Screen name="star" component={star} />
      <Tab.Screen name="clock" component={clock} />
      <Tab.Screen name="mypage" component={mypage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
