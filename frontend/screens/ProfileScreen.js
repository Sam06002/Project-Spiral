import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import Card from '../src/components/ui/Card';
import Text from '../src/components/ui/Text';
import Button from '../src/components/ui/Button';

// Mock data - will be replaced with API calls
const USER_DATA = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  studentId: 'STU2023001',
  department: 'Computer Science',
  semester: '6th Semester',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  stats: [
    { label: 'Classes Attended', value: '85%', icon: 'check-circle', color: theme.colors.success },
    { label: 'Total Classes', value: '120', icon: 'class', color: theme.colors.primary },
    { label: 'Leaves Taken', value: '5', icon: 'event-busy', color: theme.colors.warning },
  ],
  quickActions: [
    { id: '1', label: 'Edit Profile', icon: 'edit' },
    { id: '2', label: 'Change Password', icon: 'lock' },
    { id: '3', label: 'Notification Settings', icon: 'notifications' },
    { id: '4', label: 'Help & Support', icon: 'help' },
  ],
};

const ProfileScreen = ({ navigation }) => {
  const renderStatItem = (stat) => (
    <Card style={styles.statCard} key={stat.label}>
      <View style={[styles.statIcon, { backgroundColor: `${stat.color}10` }]}>
        <MaterialIcons name={stat.icon} size={24} color={stat.color} />
      </View>
      <Text variant="h3" style={styles.statValue}>{stat.value}</Text>
      <Text variant="body2" style={styles.statLabel}>{stat.label}</Text>
    </Card>
  );

  const renderActionItem = (action) => (
    <TouchableOpacity 
      key={action.id} 
      style={styles.actionItem}
      onPress={() => {}}
    >
      <View style={styles.actionIcon}>
        <MaterialIcons name={action.icon} size={24} color={theme.colors.primary} />
      </View>
      <Text variant="body1" style={styles.actionText}>{action.label}</Text>
      <MaterialIcons 
        name="chevron-right" 
        size={24} 
        color={theme.colors.text.secondary} 
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: USER_DATA.avatar }} 
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editAvatarButton}>
            <MaterialIcons name="edit" size={16} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
        <Text variant="h1" style={styles.name}>{USER_DATA.name}</Text>
        <Text variant="body2" style={styles.email}>{USER_DATA.email}</Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="badge" size={16} color={theme.colors.text.secondary} />
            <Text variant="body2" style={styles.infoText}>{USER_DATA.studentId}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="school" size={16} color={theme.colors.text.secondary} />
            <Text variant="body2" style={styles.infoText}>{USER_DATA.department}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="date-range" size={16} color={theme.colors.text.secondary} />
            <Text variant="body2" style={styles.infoText}>{USER_DATA.semester}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        {USER_DATA.stats.map(renderStatItem)}
      </View>

      <Card style={styles.actionsCard}>
        <Text variant="h3" style={styles.sectionTitle}>Account Settings</Text>
        {USER_DATA.quickActions.map(renderActionItem)}
      </Card>

      <View style={styles.footer}>
        <Button 
          variant="outlined" 
          startIcon={<MaterialIcons name="logout" size={20} color={theme.colors.error} />}
          style={styles.logoutButton}
          textStyle={{ color: theme.colors.error }}
        >
          Logout
        </Button>
        <Text variant="caption" style={styles.versionText}>v1.0.0</Text>
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
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: theme.spacing.lg,
    ...theme.shadow.md,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: theme.colors.white,
    ...theme.shadow.md,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  name: {
    marginBottom: theme.spacing.xs,
  },
  email: {
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  infoText: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.text.secondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  statCard: {
    width: '30%',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
  },
  actionsCard: {
    margin: theme.spacing.lg,
    marginTop: 0,
    padding: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: `${theme.colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  actionText: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    padding: theme.spacing.lg,
    paddingTop: 0,
  },
  logoutButton: {
    width: '100%',
    borderColor: theme.colors.error,
  },
  versionText: {
    marginTop: theme.spacing.md,
    color: theme.colors.text.secondary,
  },
});

export default ProfileScreen; 