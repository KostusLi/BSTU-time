import React, { createContext, useContext, useState } from 'react';
import { ScheduleSettings } from '../types/schedule';
//--
interface ScheduleContextType {
  settings: ScheduleSettings;
  updateSettings: (newSettings: Partial<ScheduleSettings>) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);
//--


export const ScheduleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ScheduleSettings>({
    faculty: 'ИТ',
    course: 1,
    group: 9,
    subgroup: 2,
  });

  const updateSettings = (newSettings: Partial<ScheduleSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <ScheduleContext.Provider value={{ settings, updateSettings }}>
      {children}
    </ScheduleContext.Provider>
  );
};