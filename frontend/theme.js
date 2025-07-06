export const theme = {
  colors: {
    // Primary colors
    primary: '#556BF4',
    primaryLight: '#7D90FF',
    primaryDark: '#3A4BD8',
    
    // Secondary colors
    secondary: '#2DD4BF',
    secondaryLight: '#5EE9D9',
    secondaryDark: '#0BA192',
    
    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // Grayscale
    white: '#FFFFFF',
    lightGray: '#F5F7FA',
    mediumGray: '#E5E7EB',
    gray: '#9CA3AF',
    darkGray: '#4B5563',
    black: '#111827',
    
    // Backgrounds
    background: '#F9FAFB',
    surface: '#FFFFFF',
    
    // Text
    text: {
      primary: '#111827',
      secondary: '#4B5563',
      disabled: '#9CA3AF',
      inverse: '#FFFFFF',
    },
    
    // Borders
    border: '#E5E7EB',
    divider: '#F3F4F6',
  },
  
  // Typography
  typography: {
    h1: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600',
      fontFamily: 'Inter-SemiBold',
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
      fontFamily: 'Inter-SemiBold',
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Inter-Regular',
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Inter-Regular',
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      fontFamily: 'Inter-Regular',
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter-SemiBold',
      textTransform: 'uppercase',
    },
  },
  
  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 24,
    circle: 9999,
  },
  
  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Animation
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  // Z-index
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};