import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';
import DaySchedule from '../components/schedule/DaySchedule';
import { Schedule } from '../types/schedule';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getWeekDates } from '../utils/dateHelpers';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Placeholder from '@/assets/images/Ellipse 1.png';

SplashScreen.preventAutoHideAsync();

export default function MainScreen() {
  // Инициализация шрифтов
  const [fontsLoaded] = useFonts({
    Stetica: require('@/assets/fonts/AA Stetica Bold.otf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);
  const [weekNum, setWeekNum] = useState(0);
  const [subgroup, setSubgroup] = useState(2);
  const [faculty, setFaculty] = useState('ИТ');
  const [speciality, setSpeciality] = useState('ПИ');
  const [course, setCourse] = useState(1);
  const [group, setGroup] = useState(9);

  const weekDates = getWeekDates(weekNum);
  const weekSchedule = Schedule.weeks[weekNum]?.days || [];


  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return <View style={{ flex: 1, backgroundColor: '#DADDE1' }} />;
  }

  return (
    <>
    <StatusBar
    backgroundColor={'#718296'}
    />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.BSTU}>БГТУ</Text>
        </View>
        <View style={styles.headerInfo}>
          <View style={styles.infoCard}>
            <Image style={styles.logo}
            source={Placeholder}
            />
            <View >
              <Text style={styles.title}>
                {faculty + ' ' + speciality+'-'+group +'-'+subgroup}
              </Text>
              <Text style={styles.subTitle}>
                {course} курс
              </Text>
            </View>

          </View>
        </View>
        <View style={styles.headerWeek}>
          <Text style={styles.week}>
            WEEK {weekNum + 1}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 75 }}>
        {
          weekSchedule.map((day, index) => (
            <DaySchedule
              key={day.name}
              dayName={day.name}
              lessons={day.lessons}
              date={weekDates[index]}
              subgroup={subgroup}
            />
          ))
        }
      </ScrollView>
      <View style={styles.bottomStripe}>

      </View>
    </>

  )
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
  header:{
    // flex: 1,
  },
  headerTop:{
    height: 80,
    backgroundColor: '#718296',
    // paddingLeft: 10,
  },
  
  BSTU:{
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
  infoCard:{
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo:{
    height: 50,
    width: 50,
    marginRight: 18
  },
  title:{
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
  week:{
    fontSize: 15,
    color: "#B6B6B6",
    fontFamily: "Stetica",
    textAlign: 'center',

  }
})
