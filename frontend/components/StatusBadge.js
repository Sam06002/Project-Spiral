import React from 'react';
import styled from 'styled-components/native';

const Badge = styled.View`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'Present':
        return '#4CAF50';
      case 'Absent':
        return '#F44336';
      case 'Late':
        return '#FF9800';
      default:
        return theme.colors.secondary;
    }
  }};
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

/**
 * StatusBadge - Displays attendance status with color coding
 * @param {string} status - The attendance status ('Present', 'Absent', 'Late')
 * @param {React.ReactNode} children - The text to display
 * @returns {JSX.Element}
 */
export default function StatusBadge({ status, children }) {
  return (
    <Badge status={status}>
      <BadgeText>{children || status}</BadgeText>
    </Badge>
  );
} 