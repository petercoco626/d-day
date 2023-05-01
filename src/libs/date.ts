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
