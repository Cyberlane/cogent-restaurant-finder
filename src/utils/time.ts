import dayjs from 'dayjs';
import type { DayOfWeek, OpenAt } from '../types/foursquare.type';

// Expects string in the format of "HHmm"
// Returns in the format of "HH:mm"
export const formatTime = (time: string): string => {
  return time.replace(/(\d{2})(\d{2})/, (_, hours, minutes) => {
    return `${hours}:${minutes}`;
  });
};

export const formatFilterDate = (str: string): Omit<OpenAt, 'detailed'> => {
  const date = dayjs(str);

  const dayNames: DayOfWeek[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const result = {
    dayOfWeek: dayNames[date.day()] as DayOfWeek,
    hour: Number.parseInt(date.format('HH'), 10),
    minute: Number.parseInt(date.format('mm'), 10),
  };
  return result;
};
