import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ScheduleSettings } from '../../types/schedule';
import { saveSettings, loadSettings } from '../../utils/storage';

const FACULTIES = ['ЛХ', 'ИТ', 'ПиМ', 'ТОВ', 'ХТиТ', 'ЛИД', 'ИЭ', 'ЭФ'];
const COURSES = [1, 2, 3, 4, 5];
const GROUPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const SUBGROUPS = [1, 2];

interface SelectButtonProps {
  title: string | number;
  selected: boolean;
  onPress: () => void;
}

const SelectButton = ({ title, selected, onPress }:SelectButtonProps) => (
  <TouchableOpacity 
    style={[styles.selectButton, selected && styles.selectedButton]} 
    onPress={onPress}
  >
    <Text style={[styles.buttonText, selected && styles.selectedButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function ScheduleSelector() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const [selectedSubgroup, setSelectedSubgroup] = useState<number>(0);

  useEffect(() => {
    loadSettings().then((settings) => {
      if (settings) {
        setSelectedFaculty(settings.faculty);
        setSelectedCourse(settings.course);
        setSelectedGroup(settings.group);
        setSelectedSubgroup(settings.subgroup);
      }
    });
  }, []);

  const handleSave = async () => {
    if (selectedFaculty && selectedCourse && selectedGroup && selectedSubgroup) {
      const settings: ScheduleSettings = {
        faculty: selectedFaculty,
        course: selectedCourse,
        group: selectedGroup,
        subgroup: selectedSubgroup as 1 | 2
      };
      await saveSettings(settings);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>ФАКУЛЬТЕТ</Text>
      <View style={styles.buttonGrid}>
        {FACULTIES.map((faculty) => (
          <SelectButton
            key={faculty}
            title={faculty}
            selected={selectedFaculty === faculty}
            onPress={() => setSelectedFaculty(faculty)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>КУРС</Text>
      <View style={styles.buttonGrid}>
        {COURSES.map((course) => (
          <SelectButton
            key={course}
            title={course}
            selected={selectedCourse === course}
            onPress={() => setSelectedCourse(course)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>ГРУППА</Text>
      <View style={styles.buttonGrid}>
        {GROUPS.map((group) => (
          <SelectButton
            key={group}
            title={group}
            selected={selectedGroup === group}
            onPress={() => setSelectedGroup(group)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>ПОДГРУППА</Text>
      <View style={styles.buttonGrid}>
        {SUBGROUPS.map((subgroup) => (
          <SelectButton
            key={subgroup}
            title={subgroup}
            selected={selectedSubgroup === subgroup}
            onPress={() => setSelectedSubgroup(subgroup)}
          />
        ))}
      </View>

      <TouchableOpacity 
        style={styles.readyButton}
        onPress={handleSave}
      >
        <Text style={styles.readyButtonText}>ГОТОВО</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Stetica',
    fontSize: 14,
    color: '#5D5D5D',
    marginBottom: 12,
    marginTop: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedButton: {
    backgroundColor: '#718296',
  },
  buttonText: {
    fontFamily: 'Stetica',
    fontSize: 14,
    color: '#5D5D5D',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  readyButton: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  readyButtonText: {
    fontFamily: 'Stetica',
    fontSize: 16,
    color: '#5D5D5D',
  },
});