import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardScreen from './screens/DashboardScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

// Create tab navigator
const Tab = createBottomTabNavigator();

// Screen options with icons
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Dashboard':
        iconName = 'dashboard';
        break;
      case 'History':
        iconName = 'history';
        break;
      case 'Profile':
        iconName = 'person';
        break;
      case 'Settings':
        iconName = 'settings';
        break;
      default:
        iconName = 'error';
    }

    return <MaterialIcons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: theme.colors.text.secondary,
  tabBarLabelStyle: {
    fontSize: 12,
    marginBottom: 4,
  },
  tabBarStyle: {
    height: 60,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  headerShown: false,
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{
              title: 'Home',
            }}
          />
          <Tab.Screen 
            name="History" 
            component={HistoryScreen} 
            options={{
              title: 'History',
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              title: 'Profile',
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}