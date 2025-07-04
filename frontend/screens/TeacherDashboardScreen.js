import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { getTeacherAttendance, manualOverride, setAuthToken } from '../api';

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Name = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
const Time = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;
const OverrideBtn = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 6px 16px;
  border-radius: 999px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

/**
 * TeacherDashboardScreen - Real-time class attendance
 * @returns {JSX.Element}
 */
export default function TeacherDashboardScreen() {
  const [students, setStudents] = useState([]);
  const classId = 'demo-class-id'; // Replace with real classId as needed

  useEffect(() => {
    // For demo, set a hardcoded JWT token here
    setAuthToken('YOUR_JWT_TOKEN'); // Replace with real token from login
    getTeacherAttendance(classId).then(setStudents).catch(() => setStudents([]));
    // In real app, poll or use websockets for real-time
  }, []);

  const handleOverride = async (studentId) => {
    const res = await manualOverride(studentId);
    if (res.success) {
      Alert.alert('Override Success', 'Student marked Present.');
      setStudents(students => students.map(s => s.id === studentId ? { ...s, status: 'Present' } : s));
    } else {
      Alert.alert('Error', res.message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#F5F5F5', flex: 1, padding: 16 }}>
      <Title>Class Attendance</Title>
      {students.map(stu => (
        <Card key={stu.id}>
          <Row>
            <View>
              <Name>{stu.name}</Name>
              <Time>Last Punch: {stu.lastPunch}</Time>
            </View>
            <StatusBadge status={stu.status}>{stu.status}</StatusBadge>
            {stu.status !== 'Present' && (
              <OverrideBtn onPress={() => handleOverride(stu.id)}>
                <BtnText>Override</BtnText>
              </OverrideBtn>
            )}
          </Row>
        </Card>
      ))}
    </ScrollView>
  );
} 