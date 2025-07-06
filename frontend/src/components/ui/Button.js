import React from 'react';
import { Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';
import Text from './Text';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  style,
  textStyle,
  ...rest
}) => {
  const buttonStyle = StyleSheet.flatten([
    styles.base,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ]);

  const textVariant = size === 'small' ? 'body2' : 'button';
  const textColor = variant === 'text' ? 'primary' : 'white';

  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyle,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? theme.colors.white : theme.colors.primary} 
          size={size === 'small' ? 'small' : 'large'}
        />
      ) : (
        <>
          {startIcon && <View style={styles.startIcon}>{startIcon}</View>}
          <Text 
            variant={textVariant} 
            color={disabled ? 'text.disabled' : textColor}
            style={textStyle}
          >
            {children}
          </Text>
          {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.pill,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
  },
  // Variants
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  text: {
    backgroundColor: 'transparent',
    paddingHorizontal: theme.spacing.sm,
  },
  // Sizes
  small: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
  },
  medium: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
  },
  large: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
  },
  // States
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
  // Icons
  startIcon: {
    marginRight: theme.spacing.sm,
  },
  endIcon: {
    marginLeft: theme.spacing.sm,
  },
});

export default Button;
