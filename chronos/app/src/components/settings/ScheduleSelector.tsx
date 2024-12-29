import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ScheduleSettings } from '../../types/schedule';
import { saveSettings, loadSettings } from '../../utils/storage';
import { router } from 'expo-router';
import { useTheme } from '@/app/src/context/ThemeContext';

const FACULTIES = ['ЛХ', 'ИТ', 'ПиМ', 'ТОВ', 'ХТиТ', 'ЛИД', 'ИЭ', 'ЭФ'];
const COURSES = [1, 2, 3, 4, 5];
const GROUPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const SUBGROUPS = [1, 2];

interface SelectButtonProps {
  title: string | number;
  selected: boolean;
  colors: {
    primary: string,
    secondary: string,
    background: string,
    secondaryBackgound :string,
    card: string,
    text: string,
    accentBG : string,
    textSecondary: string,
    textHeader: string,
    red: string,
    blue:string,
    green: string,
  };
  onPress: () => void;
}

const SelectButton = ({ title, selected, onPress, colors }:SelectButtonProps) => (
  
  <TouchableOpacity 
    style={[styles.selectButton, {backgroundColor: colors.card }, selected && {backgroundColor: colors.primary}]} 
    onPress={onPress}
  >
    <Text style={[styles.buttonText, {color: colors.text} , selected && {color: colors.text}]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function ScheduleSelector() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const [selectedSubgroup, setSelectedSubgroup] = useState<number>(0);

  const { colors } = useTheme();


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
    <ScrollView style={[styles.container, {backgroundColor: colors.card}]}>
      <Text style={[styles.sectionTitle,{color: colors.textHeader}]}>ФАКУЛЬТЕТ</Text>
      <View style={styles.buttonGrid}>
        {FACULTIES.map((faculty) => (
          <SelectButton
            key={faculty}
            title={faculty}
            selected={selectedFaculty === faculty}
            colors={colors}
            onPress={() => setSelectedFaculty(faculty)}
          />
        ))}
      </View>

      <Text style={[styles.sectionTitle,{color: colors.textHeader}]}>КУРС</Text>
      <View style={styles.buttonGrid}>
        {COURSES.map((course) => (
          <SelectButton
            key={course}
            title={course}
            selected={selectedCourse === course}
            colors={colors}
            onPress={() => setSelectedCourse(course)}
          />
        ))}
      </View>

      <Text style={[styles.sectionTitle,{color: colors.textHeader}]}>ГРУППА</Text>
      <View style={styles.buttonGrid}>
        {GROUPS.map((group) => (
          <SelectButton
            key={group}
            title={group}
            selected={selectedGroup === group}
            colors={colors}
            onPress={() => setSelectedGroup(group)}
          />
        ))}
      </View>

      <Text style={[styles.sectionTitle,{color: colors.textHeader}]}>ПОДГРУППА</Text>
      <View style={styles.buttonGrid}>
        {SUBGROUPS.map((subgroup) => (
          <SelectButton
            key={subgroup}
            title={subgroup}
            selected={selectedSubgroup === subgroup}
            colors={colors}
            onPress={() => setSelectedSubgroup(subgroup)}
          />
        ))}
      </View>

      <TouchableOpacity 
        style={[styles.readyButton, {backgroundColor: colors.card}]}
        onPress={()=> 
          {
            handleSave()
            router.back()
          }}>
        <Text style={[styles.readyButtonText, {color: colors.textHeader}]}>ГОТОВО</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Stetica',
    fontSize: 14,
    
    marginBottom: 12,
    marginTop: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectButton: {
    
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
 
  buttonText: {
    fontFamily: 'Stetica',
    fontSize: 14,
    
  },
  selectedButtonText: {
    
  },
  readyButton: {
    
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
    
  },
});