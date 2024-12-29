import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import DaySchedule from '../src/components/schedule/DaySchedule';
import { Schedule } from '../src/types/schedule';

import { getWeekDates } from '../src/utils/dateHelpers';


import Placeholder from '@/assets/images/Ellipse 1.png';
import SettingsLogo from '@/assets/images/Settings (1).png'
import { loadSettings } from '../src/utils/storage';

import { useTheme } from '@/app/src/context/ThemeContext';

export default function MainScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const [weekNum, setWeekNum] = useState(0);
  const [settings, setSettings] = useState({
    faculty: 'ИТ',
    speciality: 'ПИ',
    course: 1,
    group: 9,
    subgroup: 2 as 1 | 2
  });

  useEffect(() => {
    const loadSavedSettings = async () => {
      const savedSettings = await loadSettings();
      if (savedSettings) {
        setSettings(prevSettings => ({
          ...prevSettings,
          ...savedSettings,
        }));
      }
    };
  
    loadSavedSettings();
  }, [usePathname()]);

  const weekDates = getWeekDates(weekNum);
  const weekSchedule = Schedule.weeks[weekNum]?.days || [];

  const changeWeek = () => {
    setWeekNum(weekNum === 0 ? 1 : 0);
  };



  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.header}>
        <View style={[styles.headerTop, {backgroundColor: colors.primary}]}>
          <Text style={[styles.BSTU, {color: colors.secondaryBackgound}]}>БГТУ</Text>
          <Pressable
            style={styles.settingsContainer}
            hitSlop={15}
            onPress={() => router.navigate('/settings' as any)}
          >
            <Image style={styles.settings} source={SettingsLogo} />
          </Pressable>
        </View>
        <View style={[styles.headerInfo, {backgroundColor: colors.secondaryBackgound}]}>
          <View style={[styles.infoCard, {backgroundColor: colors.infoCard}]}>
            <View style={[styles.logo, {backgroundColor: colors.secondaryBackgound}]} />
            <View>
              <Text style={[styles.title, {color: colors.text}]}>
                {`${settings.faculty} ${settings.speciality}-${settings.group}-${settings.subgroup}`}
              </Text>
              <Text style={[styles.subTitle, {color: colors.text}]}>{settings.course} курс</Text>
            </View>
          </View>
        </View>
        <View style={[styles.headerWeek, {backgroundColor: colors.secondary}]}>
          <Pressable
            hitSlop={10}
            onPress={changeWeek}>
            <Text style={[styles.CurrentWeek, {color: colors.week}]}>WEEK {weekNum + 1}</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView style={[styles.container, {backgroundColor: colors.background}]} contentContainerStyle={{ paddingBottom: 75 }}>
        {weekSchedule.map((day, index) => (
          <DaySchedule
            key={day.name}
            dayName={day.name}
            lessons={day.lessons}
            date={weekDates[index]}
            subgroup={settings.subgroup}
          />
        ))}
      </ScrollView>
      <View style={[styles.bottomStripe, {backgroundColor: colors.primary}]}></View></>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
    
    paddingTop: 32,
  },
  bottomStripe: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
    height: 40,
    marginTop: 10,
  },
  header: {
    // flex: 1,
  },
  headerTop: {
    height: 80,
    
    paddingRight: 20,
    // paddingLeft: 10,
  },
  settingsContainer: {
    width: 30,
    position: 'absolute',
    right: 20,
  },

  settings: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },

  BSTU: {
    fontFamily: 'Stetica',
    fontWeight: 700,
    fontSize: 64,
    
    position: 'absolute',
    left: 10,
    bottom: -24,
  },
  headerInfo: {
    
    padding: 12,
  },
  infoCard: {
    
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 18,
    borderRadius: '50%',
  },
  title: {
    fontFamily: 'Stetica',
    fontSize: 20,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Stetica',
    fontWeight: 700,
    opacity: 0.65,
  },
  headerWeek: {
    
    paddingVertical: 7,
  },
  CurrentWeek: {
    fontSize: 15,
    
    fontFamily: "Stetica",
    textAlign: 'center',
    fontWeight: 700,

  }
})
