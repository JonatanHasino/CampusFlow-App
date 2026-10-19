import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/homeStyles';

export default function SearchBar({ value, onChangeText, onClear }) {
  return (
    <View style={styles.searchBox}>
      <Text style={styles.searchIcon}>⌕</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama mahasiswa..."
        placeholderTextColor="#9BA3B7"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        accessibilityLabel="Cari nama mahasiswa"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear} accessibilityLabel="Hapus pencarian">
          <Text style={styles.clearButton}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
