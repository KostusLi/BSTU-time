import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import DaySchedule from '../components/schedule/DaySchedule'
import { Schedule } from '../types/schedule'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getWeekDates } from '../utils/dateHelpers'
export default function MainScreen() {


  const [weekNum, setWeekNum] = useState(0)
  const [weekSchedule, setWeekSchedule] = useState(Schedule.weeks[weekNum].days)
  const weekDates = getWeekDates(weekNum);

  return (

    <ScrollView style={styles.container}>
      {
        weekSchedule.map((day, index)=> (
          <DaySchedule
            key={day.name}
            dayName={day.name}
            lessons={day.lessons}
            date={weekDates[index]}
            />
        ))
      }
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
  }
})
