import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import DaySchedule from '../components/schedule/DaySchedule';
import { Schedule } from '../types/schedule';

import { getWeekDates } from '../utils/dateHelpers';



import Placeholder from '@/assets/images/Ellipse 1.png';
import SettingsLogo from '@/assets/images/Settings (1).png'
import { loadSettings } from '../utils/storage';



export default function MainScreen() {

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
          ...savedSettings
        }));
      }
    };
    loadSavedSettings();
  }, []);

  const weekDates = getWeekDates(weekNum);
  const weekSchedule = Schedule.weeks[weekNum]?.days || [];

  const changeWeek = () => {
    setWeekNum(weekNum === 0 ? 1 : 0);
  };



  return (
    <>
      <StatusBar backgroundColor={'#718296'} />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.BSTU}>БГТУ</Text>
          <Pressable
            style={styles.settingsContainer}
            onPress={() => router.push('/src/screens/SettingsScreen')}
          >
            <Image style={styles.settings} source={SettingsLogo} />
          </Pressable>
        </View>
        <View style={styles.headerInfo}>
          <View style={styles.infoCard}>
            <Image style={styles.logo} source={Placeholder} />
            <View>
              <Text style={styles.title}>
                {`${settings.faculty} ${settings.speciality}-${settings.group}-${settings.subgroup}`}
              </Text>
              <Text style={styles.subTitle}>{settings.course} курс</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 75 }}>
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
      <View style={styles.bottomStripe}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
    backgroundColor: '#DADDE1',
    paddingTop: 32,
  },
  bottomStripe: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#718296',
    height: 40,
    marginTop: 10,
  },
  header: {
    // flex: 1,
  },
  headerTop: {
    height: 80,
    backgroundColor: '#718296',
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
    color: '#B6B6B6',
    position: 'absolute',
    left: 10,
    bottom: -24,
  },
  headerInfo: {
    backgroundColor: "#B6B6B6",
    padding: 12,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 18
  },
  title: {
    fontFamily: 'Stetica',
    fontSize: 20,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Stetica',
    opacity: 0.65,
  },
  headerWeek: {
    backgroundColor: '#485A6F',
    paddingVertical: 7,
  },
  CurrentWeek: {
    fontSize: 15,
    color: "#B6B6B6",
    fontFamily: "Stetica",
    textAlign: 'center',
  },
  NonCurrentWeek: {
    fontSize: 15,
    color: "#262626",
    fontFamily: "Stetica",
    textAlign: 'center',
  }
})
