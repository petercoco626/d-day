export const currentYear = () => new Date().getFullYear();

export function dDayDays(startDate: Date, endDate: Date): number {
  const diff: number = endDate.getTime() - startDate.getTime();
  const diffDay: number = diff / (1000 * 60 * 60 * 24);
  return diffDay;
}

export const generateDateFormatYYYYMMDD = (selectedDate: Date): string => {
  const date = new Date(selectedDate);
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return year + '-' + month + '-' + day;
};

export const checkIsDateValidation = (
  startDate: Date,
  endDateIn: Date
): boolean => {
  return startDate.getTime() <= endDateIn.getTime();
};

export function getYearMonthDayDiff(
  startDate: Date,
  endDate: Date
): [number, number, number] {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;
  let dayDiff = endDate.getDate() - startDate.getDate();

  if (dayDiff < 0) {
    monthDiff--;
    const daysInEndMonth = new Date(endYear, endMonth + 1, 0).getDate();
    dayDiff += daysInEndMonth;
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  // check for leap years
  let leapYears = 0;
  for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears++;
    }
  }

  // add leap years to year difference if end date is after February 29
  if (endMonth > 1 || (endMonth === 1 && endDate.getDate() >= 29)) {
    leapYears--;
  }

  yearDiff -= leapYears;

  return [yearDiff, monthDiff, dayDiff];
}
