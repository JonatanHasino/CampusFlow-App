import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/homeStyles';

export default function StudentRow({ item }) {
  const initials = item.nama
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');

  return (
    <View style={styles.studentCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.nama}</Text>
        <Text style={styles.studentProdi}>{item.prodi}</Text>
        <Text style={styles.studentNim}>NIM: {item.nim}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </View>
  );
}
