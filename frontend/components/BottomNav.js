import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 8px 0;
  border-top-width: 1px;
  border-top-color: #e5e7eb;
`;
const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

/**
 * BottomNav - 4 tab navigation
 * @returns {JSX.Element}
 */
export default function BottomNav() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const tabs = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'History', icon: 'history' },
    { name: 'Profile', icon: 'person' },
    { name: 'Settings', icon: 'settings' },
  ];
  return (
    <Nav>
      {tabs.map(tab => (
        <Tab key={tab.name} onPress={() => navigation.navigate(tab.name)}>
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={route.name === tab.name ? theme.colors.primary : theme.colors.textSecondary}
          />
          <Text style={{
            color: route.name === tab.name ? theme.colors.primary : theme.colors.textSecondary,
            fontWeight: route.name === tab.name ? 'bold' : 'normal',
            fontSize: 12,
            marginTop: 2,
          }}>{tab.name}</Text>
        </Tab>
      ))}
    </Nav>
  );
} 