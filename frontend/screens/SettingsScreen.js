import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { mockReportExport } from '../mock/mockApi';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 24px;
`;
const ExportBtn = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 16px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

/**
 * SettingsScreen - Export report and settings
 * @returns {JSX.Element}
 */
export default function SettingsScreen() {
  const handleExport = async () => {
    const csv = await mockReportExport();
    Alert.alert('Exported CSV', csv);
  };
  return (
    <Container>
      <Title>Settings</Title>
      <ExportBtn onPress={handleExport}>
        <BtnText>Export Attendance Report (CSV)</BtnText>
      </ExportBtn>
      <Text style={{ color: '#4B5563', marginTop: 16 }}>Other settings coming soon...</Text>
    </Container>
  );
} 