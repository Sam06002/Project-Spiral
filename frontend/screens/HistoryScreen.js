import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import Card from '../src/components/ui/Card';
import Text from '../src/components/ui/Text';

// Mock data - will be replaced with API calls
const ATTENDANCE_DATA = [
  {
    title: 'Today',
    data: [
      { 
        id: '1', 
        subject: 'Mathematics', 
        time: '09:00 AM - 10:30 AM',
        status: 'Present',
        statusColor: theme.colors.success,
        icon: 'check-circle',
      },
      { 
        id: '2', 
        subject: 'Physics', 
        time: '11:00 AM - 12:30 PM',
        status: 'Absent',
        statusColor: theme.colors.error,
        icon: 'cancel',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      { 
        id: '3', 
        subject: 'Chemistry', 
        time: '09:00 AM - 10:30 AM',
        status: 'Present',
        statusColor: theme.colors.success,
        icon: 'check-circle',
      },
      { 
        id: '4', 
        subject: 'Biology', 
        time: '11:00 AM - 12:30 PM',
        status: 'Late',
        statusColor: theme.colors.warning,
        icon: 'schedule',
      },
    ],
  },
];

const HistoryScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const renderFilterButton = (filter, label) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        selectedFilter === filter && styles.selectedFilterButton,
      ]}
      onPress={() => setSelectedFilter(filter)}
    >
      <Text 
        variant="body2" 
        style={[
          styles.filterText,
          selectedFilter === filter && styles.selectedFilterText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Card style={styles.historyItem}>
      <View style={styles.historyIconContainer}>
        <MaterialIcons 
          name={item.icon} 
          size={24} 
          color={item.statusColor} 
        />
      </View>
      <View style={styles.historyContent}>
        <View style={styles.historyHeader}>
          <Text variant="h3" style={styles.historyTitle}>{item.subject}</Text>
          <Text 
            variant="body2" 
            style={[styles.statusBadge, { backgroundColor: `${item.statusColor}20` }]}
          >
            <Text style={{ color: item.statusColor }}>{item.status}</Text>
          </Text>
        </View>
        <View style={styles.historyDetails}>
          <MaterialIcons 
            name="schedule" 
            size={16} 
            color={theme.colors.text.secondary} 
          />
          <Text variant="body2" style={styles.historyDetailText}>
            {item.time}
          </Text>
        </View>
      </View>
    </Card>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text variant="h3" style={styles.sectionHeader}>
      {title}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h1">Attendance</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
      >
        {renderFilterButton('all', 'All')}
        {renderFilterButton('present', 'Present')}
        {renderFilterButton('absent', 'Absent')}
        {renderFilterButton('late', 'Late')}
      </ScrollView>
      
      <SectionList
        sections={ATTENDANCE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  filtersContainer: {
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  filterButton: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.pill,
    marginRight: theme.spacing.sm,
    backgroundColor: theme.colors.lightGray,
  },
  selectedFilterButton: {
    backgroundColor: theme.colors.primary,
  },
  filterText: {
    color: theme.colors.text.secondary,
  },
  selectedFilterText: {
    color: theme.colors.white,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: theme.spacing.xxl,
  },
  sectionHeader: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  historyIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  historyContent: {
    flex: 1,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  historyTitle: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  statusBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
  },
  historyDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyDetailText: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.text.secondary,
  },
});

export default HistoryScreen; 