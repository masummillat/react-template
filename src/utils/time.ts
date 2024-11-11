import { DateTime } from 'luxon';

export const getCurrentWeek = (days: number=7): {day: string, date: string}[] => {
    // Get the current date and time
    const now = DateTime.now();

    // Get the start of the current week (Monday)
    const startOfWeek = now.startOf('week');

    // Generate an array of all 7 days of the week
    const daysOfWeek: {day: string, date: string}[] = Array.from({ length: days }, (_, i) =>({
        date: startOfWeek.plus({ days: i }).toFormat('d'),
        day: startOfWeek.plus({ days: i }).toFormat('ccc'),
    }))
    

    return daysOfWeek
}


export const getRelativeTime = (inputTime: string) => {
    // Parse the input time as a DateTime object
    const time = DateTime.fromISO(inputTime);
  
    // Get the current time
    const now = DateTime.now();
  
    // Return the relative time string
    return time.toRelative({ base: now });
  };

//   get time with format
export const getTime = (inputTime: string, format: string="dd/MM/yyyy") => {
    const time = DateTime.fromISO(inputTime);
    return time.toFormat(format);
};