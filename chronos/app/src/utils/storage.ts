import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScheduleSettings } from '../types/schedule';

export const saveSettings = async (settings: ScheduleSettings) => {
  try {
    await AsyncStorage.setItem('scheduleSettings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};

export const loadSettings = async (): Promise<ScheduleSettings | null> => {
  try {
    const settings = await AsyncStorage.getItem('scheduleSettings');
    return settings ? JSON.parse(settings) : null;
  } catch (error) {
    console.error('Error loading settings:', error);
    return null;
  }
};