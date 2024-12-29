// src/components/settings/ThemeToggle.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.card }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.text, { color: colors.textHeader }]}>
          {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Stetica',
    fontSize: 14,
  },
});

export default ThemeToggle;