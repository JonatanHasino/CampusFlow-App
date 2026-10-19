import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/homeStyles';

export default function SectionHeader({ title, subtitle, counter }) {
  return (
    <View style={styles.sectionHeader}>
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
