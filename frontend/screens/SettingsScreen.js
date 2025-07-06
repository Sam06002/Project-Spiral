import React, { useState } from 'react';
import { View, ScrollView, Switch, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import Card from '../src/components/ui/Card';
import Text from '../src/components/ui/Text';

const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailNotifications: true,
    pushNotifications: true,
    biometricAuth: false,
  });

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const SettingItem = ({ 
    icon, 
    title, 
    description, 
    type = 'switch',
    value,
    onPress,
    rightComponent
  }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingIcon}>
        <MaterialIcons 
          name={icon} 
          size={24} 
          color={theme.colors.primary} 
        />
      </View>
      <View style={styles.settingInfo}>
        <Text variant="h3" style={styles.settingTitle}>{title}</Text>
        {description && (
          <Text variant="body2" style={styles.settingDescription}>
            {description}
          </Text>
        )}
      </View>
      {type === 'switch' ? (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{ 
            false: theme.colors.mediumGray, 
            true: theme.colors.primary 
          }}
          thumbColor={theme.colors.white}
        />
      ) : (
        rightComponent || (
          <MaterialIcons 
            name="chevron-right" 
            size={24} 
            color={theme.colors.text.secondary} 
          />
        )
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="h1">Settings</Text>
        <Text variant="body2" style={styles.headerSubtitle}>
          Manage your app preferences and account settings
        </Text>
      </View>

      <Card style={styles.section}>
        <Text variant="h3" style={styles.sectionTitle}>Appearance</Text>
        <SettingItem
          icon="brightness-6"
          title="Dark Mode"
          description="Switch between light and dark theme"
          type="switch"
          value={settings.darkMode}
          onPress={() => toggleSetting('darkMode')}
        />
      </Card>

      <Card style={styles.section}>
        <Text variant="h3" style={styles.sectionTitle}>Notifications</Text>
        <SettingItem
          icon="notifications"
          title="Enable Notifications"
          description="Turn notifications on/off"
          type="switch"
          value={settings.notifications}
          onPress={() => toggleSetting('notifications')}
        />
        
        {settings.notifications && (
          <>
            <View style={styles.divider} />
            <SettingItem
              icon="email"
              title="Email Notifications"
              type="switch"
              value={settings.emailNotifications}
              onPress={() => toggleSetting('emailNotifications')}
            />
            <View style={styles.divider} />
            <SettingItem
              icon="notifications-active"
              title="Push Notifications"
              type="switch"
              value={settings.pushNotifications}
              onPress={() => toggleSetting('pushNotifications')}
            />
          </>
        )}
      </Card>

      <Card style={styles.section}>
        <Text variant="h3" style={styles.sectionTitle}>Security</Text>
        <SettingItem
          icon="fingerprint"
          title="Biometric Authentication"
          description="Use fingerprint or face ID to log in"
          type="switch"
          value={settings.biometricAuth}
          onPress={() => toggleSetting('biometricAuth')}
        />
      </Card>

      <Card style={styles.section}>
        <Text variant="h3" style={styles.sectionTitle}>About</Text>
        <SettingItem
          icon="info"
          title="App Version"
          type="text"
          rightComponent={
            <Text variant="body2" style={styles.versionText}>
              v1.0.0
            </Text>
          }
        />
        <View style={styles.divider} />
        <SettingItem
          icon="help"
          title="Help & Support"
          onPress={() => {}}
        />
        <View style={styles.divider} />
        <SettingItem
          icon="privacy-tip"
          title="Privacy Policy"
          onPress={() => {}}
        />
        <View style={styles.divider} />
        <SettingItem
          icon="description"
          title="Terms of Service"
          onPress={() => {}}
        />
      </Card>

      <View style={styles.footer}>
        <Text variant="caption" style={styles.copyrightText}>
          © 2025 ClassScheduler. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  headerSubtitle: {
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  section: {
    margin: theme.spacing.lg,
    marginBottom: 0,
    padding: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    marginBottom: 2,
  },
  settingDescription: {
    color: theme.colors.text.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.xs,
  },
  versionText: {
    color: theme.colors.text.secondary,
  },
  footer: {
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  copyrightText: {
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
});

export default SettingsScreen;
