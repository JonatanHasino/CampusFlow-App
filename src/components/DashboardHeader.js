import React from 'react';
import { View, Text } from 'react-native';
import InfoCard from './InfoCard';
import SectionHeader from './SectionHeader';
import styles from '../styles/homeStyles';

export default function DashboardHeader({ studentCount, onTaskDetail }) {
  return (
    <View>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.eyebrow}>CAMPUSFLOW • STUDENT SPACE</Text>
          <Text style={styles.greeting}>Halo, Jonatan! 👋</Text>
          <Text style={styles.subtitle}>Siap produktif hari ini?</Text>
        </View>
        <View style={styles.profile}><Text style={styles.profileText}>J</Text></View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>RINGKASAN AKTIVITAS</Text>
        <Text style={styles.heroTitle}>Satu langkah kecil,{ '\n' }kemajuan besar.</Text>
        <Text style={styles.heroDescription}>Kelola aktivitas kampusmu dengan lebih teratur.</Text>
        <View style={styles.heroBottom}>
          <View>
            <Text style={styles.heroNumber}>02</Text>
            <Text style={styles.heroSmall}>Aktivitas ditampilkan</Text>
          </View>
          <View style={styles.semesterBadge}><Text style={styles.semesterText}>SEMESTER 3</Text></View>
        </View>
      </View>

      <SectionHeader
        title="Aktivitasmu"
        subtitle="Tetap konsisten dengan rencanamu"
        counter="02 TASK"
      />
      <View style={styles.taskList}>
        <InfoCard
          title="Menyelesaikan UI Mobile"
          status="selesai"
          onPress={() => onTaskDetail('UI Mobile sudah selesai!')}
        />
        <InfoCard
          title="Mempelajari React Native"
          status="proses"
          onPress={() => onTaskDetail('Pelajari komponen, props, state, dan FlatList.')}
        />
      </View>

      <SectionHeader
        title="Direktori Mahasiswa"
        subtitle="Temukan teman kampusmu"
        counter={`${studentCount} ORANG`}
      />
    </View>
  );
}
