export const getWeekDates = (weekNum: number = 0) => {
    const now = new Date();
    
    const currentDay = now.getDay();
    const diff = now.getDate() - currentDay + (currentDay === 0 ? -6 : 1); 
    const monday = new Date(now.setDate(diff));
    
    monday.setDate(monday.getDate() + (weekNum * 7));
    
    const weekDates = [];
    for (let i = 0; i < 6; i++) { 
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    
    return weekDates;
  };

  export const formatDate = (date: Date): string => {
    return `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })}`;
  };
  
  // Get year for display
  export const getYear = (date: Date): string => {
    return date.getFullYear().toString();
  };