import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import Card from '../src/components/ui/Card';
import Button from '../src/components/ui/Button';
import Text from '../src/components/ui/Text';

// Mock data - will be replaced with API calls
const UPCOMING_CLASSES = [
  { id: '1', title: 'Mathematics', time: '09:00 AM - 10:30 AM', room: 'Room 101' },
  { id: '2', title: 'Physics', time: '11:00 AM - 12:30 PM', room: 'Lab 2' },
];

const QUICK_ACTIONS = [
  { id: '1', title: 'Mark Attendance', icon: 'check-circle' },
  { id: '2', title: 'View Schedule', icon: 'calendar-today' },
  { id: '3', title: 'Apply Leave', icon: 'event-busy' },
];

const DashboardScreen = ({ navigation }) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View>
        <Text variant="h3" style={styles.greeting}>Good morning,</Text>
        <Text variant="h1">John Doe</Text>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <MaterialIcons name="notifications-none" size={24} color={theme.colors.text.primary} />
      </TouchableOpacity>
    </View>
  );

  const renderUpcomingClasses = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text variant="h3">Upcoming Classes</Text>
        <Button variant="text" size="small" onPress={() => navigation.navigate('Schedule')}>
          View All
        </Button>
      </View>
      
      {UPCOMING_CLASSES.map((item) => (
        <Card key={item.id} style={styles.classCard}>
          <View style={styles.classInfo}>
            <Text variant="h3" style={styles.classTitle}>{item.title}</Text>
            <View style={styles.classDetails}>
              <MaterialIcons name="schedule" size={16} color={theme.colors.text.secondary} />
              <Text variant="body2" style={styles.classDetailText}>{item.time}</Text>
              <View style={styles.separator} />
              <MaterialIcons name="meeting-room" size={16} color={theme.colors.text.secondary} />
              <Text variant="body2" style={styles.classDetailText}>{item.room}</Text>
            </View>
          </View>
          <Button size="small" onPress={() => {}}>
            Join Now
          </Button>
        </Card>
      ))}
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.section}>
      <Text variant="h3" style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActions}>
        {QUICK_ACTIONS.map((action) => (
          <TouchableOpacity 
            key={action.id} 
            style={styles.actionButton}
            onPress={() => {}}
          >
            <View style={styles.actionIcon}>
              <MaterialIcons name={action.icon} size={24} color={theme.colors.primary} />
            </View>
            <Text variant="body2" style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {renderHeader()}
        {renderUpcomingClasses()}
        {renderQuickActions()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    color: theme.colors.text.secondary,
  },
  notificationButton: {
    padding: theme.spacing.sm,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
  classCard: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classInfo: {
    flex: 1,
  },
  classTitle: {
    marginBottom: theme.spacing.xs,
  },
  classDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  classDetailText: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.text.secondary,
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing.sm,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.circle,
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  actionText: {
    textAlign: 'center',
  },
});

export default DashboardScreen;