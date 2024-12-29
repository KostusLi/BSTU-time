import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Lesson } from '@/app/src/types/schedule';
import { useTheme } from '@/app/src/context/ThemeContext';



interface LessonCardProps {
  lesson: Lesson;
}

let mainColor: string;

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
   const { colors } = useTheme();
 
  switch (lesson.type) {
    case "пз" : {
      mainColor = colors.green
      break;
    }
  
    case "лк" : {
      mainColor = colors.red
      break;
    }
  
    case "лр" : {
      mainColor = colors.blue
      break;
    }
   } 

 

  return (
    <View style={[styles.card, {backgroundColor: colors.card}]}>
      <View style={styles.container}>
        <View style={[styles.leftStripe, {backgroundColor: mainColor}]} />
        <View style={styles.content}>
          <View style={styles.mainInfo}>
            <Text style={[styles.subject, {color: mainColor}]}>{lesson.subject.toUpperCase()}</Text>
            <Text style={[styles.location, {color: colors.text}]}>
              {lesson.location ? `АУД. ${lesson.location.room}-${lesson.location.building}` : ''}
            </Text>
            {lesson.teacher && (
              <Text style={[styles.teacher, {color: colors.text}]}>
               {lesson.teacher}
              </Text>
            )}
          </View>
          <View style={styles.rightInfo}>
            {lesson.type && <Text style={[styles.type, {color: mainColor}]}>{lesson.type.toUpperCase()}</Text>}
            <Text style={[styles.time, {color: colors.text}]}>
              {lesson.timeSlot.start}-{lesson.timeSlot.end}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // height: 120,
    flex: 1,
    
    borderRadius: 12,
    padding: 12,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  leftStripe: {
    width: 4,
    borderRadius: 2,
    marginRight: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainInfo: {
    flex: 1,
    marginRight: 16,
  },
  subject: {
    fontSize: 14,
    fontWeight: '700',
    
    marginBottom: 4,
    fontFamily: 'Stetica'
  },
  location: {
    fontSize: 12,
    
    opacity: 0.4,
    marginBottom: 4,
    fontFamily: 'Stetica',
    fontWeight: '700',

  },
  teacher: {
    fontSize: 12,
    
    opacity: 0.8,
    fontWeight: '700',
    fontFamily: 'Stetica'

  },
  rightInfo: {
    alignItems: 'flex-end',
  },
  type: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: 'Stetica'
  },
  time: {
    fontSize: 12,
    
    opacity: 0.4,
    fontWeight: '700',
    fontFamily: 'Stetica'
  },
});



export default LessonCard