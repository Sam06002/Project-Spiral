import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import TeacherDashboardScreen from './screens/TeacherDashboardScreen';

/**
 * App entry point with navigation
 * @returns {JSX.Element}
 */
const Tab = createBottomTabNavigator();

export default function App() {
  // For demo, always show student tabs. In real app, use auth state.
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
} 