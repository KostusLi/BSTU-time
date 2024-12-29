// src/types/scheduleSettings.ts

export interface Faculty {
    id: string;
    name: string;
    specialities: Speciality[];
  }
  
  export interface Speciality {
    id: string;
    name: string;
    courses: Course[];
  }
  
  export interface Course {
    number: number;
    groups: Group[];
  }
  
  export interface Group {
    number: number;
    hasSubgroups: boolean;
  }
  
  // Константы с данными
  export const FACULTIES: Faculty[] = [
    {
      id: 'it',
      name: 'ИТ',
      specialities: [
        {
          id: 'pi',
          name: 'ПИ',
          courses: [
            {
              number: 1,
              groups: [
                { number: 9, hasSubgroups: true },
                { number: 10, hasSubgroups: true }
              ]
            },
            {
              number: 2,
              groups: [
                { number: 9, hasSubgroups: true },
                { number: 10, hasSubgroups: true }
              ]
            }
          ]
        },
        {
          id: 'is',
          name: 'ИС',
          courses: [
            {
              number: 1,
              groups: [
                { number: 1, hasSubgroups: true },
                { number: 2, hasSubgroups: true }
              ]
            }
          ]
        }
      ]
    }
  ];