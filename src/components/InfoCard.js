import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/infoCardStyles';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.iconBox, isSelesai ? styles.greenBox : styles.orangeBox]}>
          <Text style={styles.icon}>{isSelesai ? '✓' : '↗'}</Text>
        </View>

        <View style={[styles.badge, isSelesai ? styles.greenBadge : styles.orangeBadge]}>
          <View style={[styles.dot, isSelesai ? styles.greenDot : styles.orangeDot]} />
          <Text style={[styles.statusText, isSelesai ? styles.greenText : styles.orangeText]}>
            {isSelesai ? 'Selesai' : 'Dalam Proses'}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        {isSelesai
          ? 'Aktivitas telah diselesaikan dengan baik.'
          : 'Terus lanjutkan, sedikit lagi selesai.'}
      </Text>

      <TouchableOpacity
        style={[styles.button, isSelesai ? styles.greenButton : styles.orangeButton]}
        onPress={onPress}
        activeOpacity={0.75}
      >
        <Text style={[styles.buttonText, isSelesai ? styles.greenText : styles.orangeText]}>
          Lihat Detail
        </Text>
        <Text style={[styles.arrow, isSelesai ? styles.greenText : styles.orangeText]}>›</Text>
      </TouchableOpacity>
    </View>
  );
}
