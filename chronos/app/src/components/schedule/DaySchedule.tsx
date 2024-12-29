import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Lesson } from '@/app/src/types/schedule';
import LessonCard from '../schedule/LessonCard';

import { getYear, formatDate } from '../../utils/dateHelpers';


interface DayScheduleProps {
  lessons: Lesson[];
  dayName: string;
  date: Date;
  subgroup: number;
}

const DaySchedule = ({ lessons, dayName, date, subgroup }: DayScheduleProps) => {
  
  return (
    <View style={styles.container}>


      <View style={styles.dayNameContainer}>
        <Text style={styles.date}>{formatDate(date)}</Text>
        <Text style={styles.dayName}>{dayName.toUpperCase()}</Text>
        <Text style={styles.year}>{getYear(date)}</Text>
      </View>
      {lessons.map(lesson => {
        if(!lesson.subgroup || (lesson.subgroup && lesson.subgroup === subgroup))
        return <LessonCard key={lesson.id} lesson={lesson} />
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dayNameContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#262626",
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  ,
  dayName: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Anton',
    color: '#C4B7A5',
  },
  date: {
    fontSize: 16,
    fontFamily: 'Anton',
    color: '#C4B7A5',
  },
  // dayName:{
  //   textAlign: 'center',
  //   verticalAlign: 'top',
  //   color: "#C4B7A5",
  //   fontSize: 24,
  //   lineHeight: 36,
  //   fontFamily: 'Anton'
  // },
  year: {
    textAlign: 'center',
    verticalAlign: 'top',
    color: "#C4B7A5",
    fontSize: 16,
    lineHeight: 36,
    fontFamily: 'Anton'
  },
})


export default DaySchedule;

