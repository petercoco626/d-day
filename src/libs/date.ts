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
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

export const getDayOnDate = (selectedDate: Date): dayType => {
  console.log(selectedDate.getDay(), selectedDate);
  const dayOnKor = translateDay[selectedDate.getDate()];
  // console.log(dayOnKor);

  return dayOnKor;
};
