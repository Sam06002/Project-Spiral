import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { login, setAuthToken } from '../api';

const Container = styled.View`
  flex: 1;
  background: #F5F5F5;
  justify-content: center;
  padding: 24px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #556BF4;
  margin-bottom: 32px;
  text-align: center;
`;
const Input = styled.TextInput`
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  border-width: 1px;
  border-color: #e5e7eb;
`;
const Button = styled.TouchableOpacity`
  background: #556BF4;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 8px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      setAuthToken(res.token);
      Alert.alert('Login Success');
      navigation.replace('Dashboard');
    } catch (err) {
      Alert.alert('Login Failed', err.response?.data?.message || 'Unknown error');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Container>
  );
} 