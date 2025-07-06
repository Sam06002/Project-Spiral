import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { theme } from '../../../theme';

const Card = ({
  children,
  variant = 'elevated',
  onPress,
  style,
  ...rest
}) => {
  const Container = onPress ? Pressable : View;
  
  const containerStyle = StyleSheet.flatten([
    styles.base,
    variant === 'elevated' && styles.elevated,
    variant === 'outlined' && styles.outlined,
    variant === 'filled' && styles.filled,
    style,
  ]);

  return (
    <Container 
      style={({ pressed }) => [
        containerStyle,
        onPress && pressed && styles.pressed,
      ]}
      onPress={onPress}
      {...rest}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.surface,
    overflow: 'hidden',
  },
  elevated: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filled: {
    backgroundColor: theme.colors.lightGray,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default Card;
