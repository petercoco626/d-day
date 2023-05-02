export function dDayDays(startDate: Date, endDate: Date): number {
  const diff: number = endDate.getTime() - startDate.getTime();
  const diffDay: number = Math.floor(diff / (1000 * 60 * 60 * 24));
  return diffDay;
}

export function dDayYearMonthDay(
  startDate: Date,
  endDate: Date
): [number, number, number] {
  const diff: number = endDate.getTime() - startDate.getTime();
  const diffDay: number = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffYear = Math.floor(diffDay / 365);
  const diffMonth = Math.floor((diffDay % 365) / 12);

  return [diffYear, diffMonth, diffDay];
}

export const checkIsDateValidation = (
  startDate: Date,
  endDateIn: Date
): boolean => {
  return startDate.getTime() <= endDateIn.getTime();
};

type dayType =
  | '월요일'
  | '화요일'
  | '수요일'
  | '목요일'
  | '금요일'
  | '토요일'
  | '일요일';
type translateDayType = {
  [key in string]: dayType;
};
const translateDay: any = {
  Mon: '월요일',
  Tue: '화요일',
  Wed: '수요일',
  Thu: '목요일',
  Fri: '금요일',
  Sat: '토요일',
  Sun: '일요일',
};

export const getDayOnDate = (selectedDate: Date): dayType => {
  console.log(selectedDate.getDate(), selectedDate);
  const dayOnKor = translateDay[selectedDate.getDate()];
  console.log(dayOnKor);

  return dayOnKor;
};
