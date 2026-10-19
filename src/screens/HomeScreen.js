
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Modal,
  Pressable,
} from 'react-native';

import students from '../data/students';
import DashboardHeader from '../components/DashboardHeader';
import SearchBar from '../components/SearchBar';
import StudentRow from '../components/StudentRow';
import styles from '../styles/homeStyles';

export default function HomeScreen() {
  const [keyword, setKeyword] = useState('');
  const [selectedDetail, setSelectedDetail] = useState(null);

  const filteredStudents = students.filter((student) =>
    student.nama.toLowerCase().includes(keyword.toLowerCase().trim())
  );

  // Detail aktivitas dari DashboardHeader
  const showTaskDetail = (message) => {
    setSelectedDetail({
      title: 'Detail Aktivitas',
      message,
    });
  };

  // Detail mahasiswa ketika baris mahasiswa ditekan
  const showStudentDetail = (student) => {
    setSelectedDetail({
      title: 'Detail Mahasiswa',
      student,
    });
  };

  const closeDetail = () => {
    setSelectedDetail(null);
  };

  const header = (
    <View>
      <DashboardHeader
        studentCount={filteredStudents.length}
        onTaskDetail={showTaskDetail}
      />

      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        onClear={() => setKeyword('')}
      />

      <Text style={styles.resultHint}>
        {keyword
          ? `Hasil pencarian: ${keyword}`
          : 'Semua mahasiswa terdaftar'}
      </Text>
    </View>
  );

  const emptyState = (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyIcon}>⌕</Text>

      <Text style={styles.emptyTitle}>
        Data tidak ditemukan!
      </Text>

      <Text style={styles.emptyDescription}>
        Coba kata kunci atau ejaan nama yang lain.
      </Text>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => setKeyword('')}
      >
        <Text style={styles.resetText}>
          Reset Pencarian
        </Text>
      </TouchableOpacity>
    </View>
  );

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>CAMPUSFLOW</Text>
      <Text style={styles.footerSubtitle}>
        Belajar teratur, tumbuh bersama.
      </Text>
      <Text style={styles.footerTiny}>
        MOBILE APP • UTS 2026
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F6F7FC"
      />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={filteredStudents}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => showStudentDetail(item)}
          >
            <StudentRow item={item} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={header}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={emptyState}
        ListFooterComponent={footer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />

      {/* Modal detail aktivitas dan mahasiswa */}
      <Modal
        visible={selectedDetail !== null}
        transparent
        animationType="fade"
        onRequestClose={closeDetail}
        statusBarTranslucent
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
          }}
        >
          <Pressable
            onPress={closeDetail}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            accessibilityLabel="Tutup detail"
          />

          <View
            style={{
              width: '100%',
              maxWidth: 420,
              backgroundColor: '#FFFFFF',
              padding: 24,
              borderRadius: 22,
              elevation: 10,
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.18,
              shadowRadius: 16,
            }}
          >
            <View
              style={{
                width: 44,
                height: 5,
                borderRadius: 5,
                backgroundColor: '#E0E7FF',
                marginBottom: 20,
              }}
            />

            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#4F46E5',
                letterSpacing: 1.2,
                marginBottom: 8,
              }}
            >
              CAMPUSFLOW
            </Text>

            <Text
              style={{
                fontSize: 23,
                fontWeight: '800',
                color: '#172033',
                marginBottom: 18,
              }}
            >
              {selectedDetail?.title}
            </Text>

            {selectedDetail?.student ? (
              <View style={{ gap: 14 }}>
                <View
                  style={{
                    backgroundColor: '#EEF2FF',
                    borderRadius: 14,
                    padding: 16,
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: '#4F46E5',
                      fontSize: 12,
                      fontWeight: '700',
                      marginBottom: 6,
                    }}
                  >
                    NAMA MAHASISWA
                  </Text>

                  <Text
                    style={{
                      color: '#172033',
                      fontSize: 19,
                      fontWeight: '700',
                    }}
                  >
                    {selectedDetail.student.nama}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: '#94A3B8',
                      fontSize: 12,
                      fontWeight: '600',
                      marginBottom: 5,
                    }}
                  >
                    NOMOR INDUK MAHASISWA
                  </Text>

                  <Text
                    style={{
                      color: '#334155',
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                  >
                    {selectedDetail.student.nim}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: '#94A3B8',
                      fontSize: 12,
                      fontWeight: '600',
                      marginBottom: 5,
                    }}
                  >
                    PROGRAM STUDI
                  </Text>

                  <Text
                    style={{
                      color: '#334155',
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                  >
                    {selectedDetail.student.prodi}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  color: '#64748B',
                  fontSize: 15,
                  lineHeight: 24,
                  marginBottom: 24,
                }}
              >
                {selectedDetail?.message}
              </Text>
            )}

            <TouchableOpacity
              onPress={closeDetail}
              activeOpacity={0.8}
              style={{
                backgroundColor: '#4F46E5',
                paddingVertical: 15,
                borderRadius: 13,
                alignItems: 'center',
                marginTop: 24,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 15,
                  fontWeight: '700',
                }}
              >
                Tutup Detail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
