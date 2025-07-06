import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const Text = ({
  variant = 'body1',
  color = 'text.primary',
  style,
  children,
  ...rest
}) => {
  // Get the typography style based on the variant
  const textStyle = StyleSheet.flatten([
    styles.base,
    theme.typography[variant],
    { color: getColor(color) },
    style,
  ]);

  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
};

// Helper function to get color from theme
const getColor = (colorPath) => {
  const parts = colorPath.split('.');
  let result = theme;
  
  for (const part of parts) {
    result = result[part];
    if (!result) break;
  }
  
  return result || colorPath; // Return the path if not found
};

// Base styles
const styles = StyleSheet.create({
  base: {
    // Default text styles can go here
  },
});

export default Text;
