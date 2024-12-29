export interface ScheduleSettings {
    faculty: string;
    course: number;
    group: number;
    subgroup: 1 | 2;
  }

  interface Schedule {
    weeks: Week[];
  }
  
  interface Week {
    weekNumber: 1 | 2;
    days: Day[];
  }
  
  interface Day {
    name: DayName;
    lessons: Lesson[];
  }
  
  type DayName = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
  
  export interface Lesson {
    id: string;
    timeSlot: TimeSlot;
    subject: string;
    type: LessonType;
    location?: Location;
    teacher?: string; 
    subgroup?: number; 
    isOptional?: boolean; 
  }
  
  interface TimeSlot {
    start: string;
    end: string;
  }
  
  interface Location {
    building: string;
    room: string;
  }
  
  type LessonType = 'лк' | 'пз' | 'лр';


export const Schedule : Schedule = {
  "weeks": [
      {
          "weekNumber": 1,
          "days": [
              {
                  "name": "monday",
                  "lessons": [
                      {
                          "id": "mon_1_1_1",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Компьютерные языки разметки",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "102б"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "mon_1_1_2",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Основы программной инженерии",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "204"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "mon_1_2_1",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "222"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "mon_1_2_2",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Основы алгоритмизации и программирования",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "102б"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "mon_1_3",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Математический анализ",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Калиновская Е. В."
                      },
                      {
                          "id": "mon_1_4",
                          "timeSlot": {
                              "start": "19:25",
                              "end": "21:00"
                          },
                          "subject": "Белорусский язык",
                          "type": "пз",
                          "location": {
                              "building": "4",
                              "room": "423"
                          }
                      }
                  ]
              },
              {
                  "name": "tuesday",
                  "lessons": [
                      {
                          "id": "tue_1_1",
                          "timeSlot": {
                              "start": "13:00",
                              "end": "14:25"
                          },
                          "subject": "Физическая культура",
                          "type": "пз"
                      },
                      {
                          "id": "tue_1_2",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Основы алгоритмизации и программирования",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Белодед Н. И."
                      },
                      {
                          "id": "tue_1_3",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Линейная алгебра и аналитическая геометрия",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Калиновская Е. В."
                      },
                      {
                          "id": "tue_1_4_1",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "222"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "tue_1_4_2",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "224"
                          },
                          "subgroup": 2
                      }
                  ]
              },
              {
                  "name": "wednesday",
                  "lessons": [
                      {
                          "id": "wed_1_2",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Математический анализ",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "100"
                          },
                          "teacher": "Калиновская Е. В."
                      },
                      {
                          "id": "wed_1_3",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Арифметико-логические основы вычислительных систем",
                          "type": "пз",
                          "location": {
                              "building": "1",
                              "room": "502"
                          }
                      },
                      {
                          "id": "wed_1_4",
                          "timeSlot": {
                              "start": "19:25",
                              "end": "21:00"
                          },
                          "subject": "Белорусский язык",
                          "type": "пз",
                          "location": {
                              "building": "4",
                              "room": "433"
                          }
                      }
                  ]
              },
              {
                  "name": "thursday",
                  "lessons": [
                      {
                          "id": "thu_1_1",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Компьютерные языки разметки",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "100"
                          },
                          "teacher": "Барковский"
                      },
                      {
                          "id": "thu_1_2_1",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Основы алгоритмизации и программирования",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "301"
                          },
                          "subgroup": 1
                      }
                  ]
              },
              {
                  "name": "friday",
                  "lessons": [
                      {
                          "id": "fri_1_1",
                          "timeSlot": {
                              "start": "13:00",
                              "end": "14:25"
                          },
                          "subject": "Физическая культура",
                          "type": "пз"
                      },
                      {
                          "id": "fri_1_2",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Линейная алгебра и аналитическая геометрия",
                          "type": "пз",
                          "location": {
                              "building": "4",
                              "room": "123"
                          }
                      },
                      {
                          "id": "fri_1_3_1",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Основы программной инженерии",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "102б"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "fri_1_3_2",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Компьютерные языки разметки",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "308"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "fri_1_4",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Основы программной инженерии",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Наркевич А. С."
                      }
                  ]
              },
              {
                  "name": "saturday",
                  "lessons": [
                      {
                          "id": "sat_1_1_2",
                          "timeSlot": {
                              "start": "11:25",
                              "end": "12:50"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "224"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "sat_1_2",
                          "timeSlot": {
                              "start": "13:00",
                              "end": "14:25"
                          },
                          "subject": "Математический анализ",
                          "type": "пз",
                          "location": {
                              "building": "4",
                              "room": "334"
                          }
                      },
                      {
                          "id": "sat_1_3",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Арифметико-логические основы вычислительных систем",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Гринюк Д. А."
                      }
                  ]
              }
          ]
      },
      {
          "weekNumber": 2,
          "days": [
              {
                  "name": "monday",
                  "lessons": [
                      {
                          "id": "mon_2_1_1",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Компьютерные языки разметки",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "102б"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "mon_2_1_2",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Основы программной инженерии",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "204"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "mon_2_2_1",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "222"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "mon_2_2_2",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Основы алгоритмизации и программирования",
                          "type": "лр",
                          "location": {
                              "building": "1",
                              "room": "102б"
                          },
                          "subgroup": 2
                      },
                      {
                          "id": "mon_2_3",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Математический анализ",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Калиновская Е. В."
                      },
                      {
                          "id": "mon_2_4",
                          "timeSlot": {
                              "start": "19:25",
                              "end": "21:00"
                          },
                          "subject": "Коррупция и её общественная опасность(можно не ходить)",
                          "type": "лк",
                          "location": {
                              "building": "4",
                              "room": "200"
                          },
                          "isOptional": true
                      }
                  ]
              },
              {
                  "name": "tuesday",
                  "lessons": [
                      {
                          "id": "tue_2_1",
                          "timeSlot": {
                              "start": "13:00",
                              "end": "14:25"
                          },
                          "subject": "Физическая культура",
                          "type": "пз"
                      },
                      {
                          "id": "tue_2_2",
                          "timeSlot": {
                              "start": "14:40",
                              "end": "16:05"
                          },
                          "subject": "Основы алгоритмизации и программирования",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Белодед Н. И."
                      },
                      {
                          "id": "tue_2_3",
                          "timeSlot": {
                              "start": "16:25",
                              "end": "17:50"
                          },
                          "subject": "Линейная алгебра и аналитическая геометрия",
                          "type": "лк",
                          "location": {
                              "building": "3а",
                              "room": "200"
                          },
                          "teacher": "Калиновская Е. В."
                      },
                      {
                          "id": "tue_2_4_1",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "222"
                          },
                          "subgroup": 1
                      },
                      {
                          "id": "tue_2_4_2",
                          "timeSlot": {
                              "start": "18:00",
                              "end": "19:25"
                          },
                          "subject": "Английский язык",
                          "type": "пз",
                          "location": {
                              "building": "2",
                              "room": "224"
                          },
                          "subgroup" : 2,
                      }
                  ]
              }
          ]
      }
  ]
} 