import { currentYear, dDayDays, generateDateFormatYYYYMMDD } from '@/libs/date';
import { HolidaysType } from '@/types/date';

export const CURRENT_YEAR = currentYear();

export const HOLIDAYS: HolidaysType[] = [
  {
    name: '다이어리 데이',
    description: '친구 혹은 연인, 지인과 다이어리를 주고 받는 날',
    date: `${CURRENT_YEAR}.01.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-01-14`)
    ),
  },
  {
    name: '발렌타인 데이',
    description: '여자가 남자에게 초콜릿을 주는 날',
    date: `${CURRENT_YEAR}.02.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-02-14`)
    ),
  },
  {
    name: '삼겹살 데이',
    description: '숫자 3이 삼겹살을 의미, 삼겹살을 먹는 날',
    date: `${CURRENT_YEAR}.03.03`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-03-03`)
    ),
  },
  {
    name: '화이트 데이',
    description: '남자가 여자에게 사탕을 주는 날',
    date: `${CURRENT_YEAR}.03.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-03-14`)
    ),
  },
  {
    name: '블랙데이',
    description: '애인이 없는 솔로가 짜장면을 먹는 날',
    date: `${CURRENT_YEAR}.04.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-04-14`)
    ),
  },
  {
    name: '오삼데이',
    description: '오징어삼겹살, 오삼 불고기를 먹는 날',
    date: `${CURRENT_YEAR}.05.03`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-05-03`)
    ),
  },
  {
    name: '로즈데이',
    description: '사랑하는 연인에게 장미꽃을 선물하는 날',
    date: `${CURRENT_YEAR}.05.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-05-14`)
    ),
  },
  {
    name: '부부의날',
    description: '가정의 달인 5월에 둘이 하나가 된다는 뜻의 기념일',
    date: `${CURRENT_YEAR}.05.21`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-05-21`)
    ),
  },
  {
    name: '키스데이',
    description: '사랑하는 연인들끼리 키스하는 날',
    date: `${CURRENT_YEAR}.06.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-06-14`)
    ),
  },
  {
    name: '실버데이',
    description: '사랑하는 연인들끼리 은반지(은제품)를 선물하는 날',
    date: `${CURRENT_YEAR}.07.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-07-14`)
    ),
  },
  {
    name: '뮤직데이',
    description: '연인들끼리 음악을 함께 듣는 날',
    date: `${CURRENT_YEAR}.08.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-08-14`)
    ),
  },
  {
    name: '포토데이',
    description: '사랑하는 연인과 함께 사진 찍는 날',
    date: `${CURRENT_YEAR}.09.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-09-14`)
    ),
  },
  {
    name: '고백데이',
    description: '이 날 고백해서 사귀면 100일째 되는날이 크리스마스',
    date: `${CURRENT_YEAR}.09.17`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-09-17`)
    ),
  },
  {
    name: '와인데이',
    description: '연인과 함께 분위기 있게 와인 마시는 날',
    date: `${CURRENT_YEAR}.10.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-10-14`)
    ),
  },
  {
    name: '빼빼로데이',
    description: '빼빼로를 주고받는 날',
    date: `${CURRENT_YEAR}.11.11`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-11-11`)
    ),
  },
  {
    name: '무비데이',
    description: '사랑하는 연인과 함께 영화를 보는 날',
    date: `${CURRENT_YEAR}.11.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-11-14`)
    ),
  },
  {
    name: '허그데이',
    description: '사랑하는 연인을 꼬옥 안아주는 날',
    date: `${CURRENT_YEAR}.12.14`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-12-14`)
    ),
  },
  {
    name: '크리스마스',
    description: '크리스마스 또는 성탄절은 예수의 탄생을 기념하는 날',
    date: `${CURRENT_YEAR}.12.25`,
    d_day: dDayDays(
      new Date(generateDateFormatYYYYMMDD(new Date())),
      new Date(`${CURRENT_YEAR}-12-25`)
    ),
  },
];
