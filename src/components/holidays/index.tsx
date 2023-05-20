import { HOLIDAYS } from '@/constants/date';
import { HolidaysType } from '@/types/date';
import { GetServerSidePropsContext } from 'next';

type Props = {
  holidays: HolidaysType[];
};

const Holidays = ({ holidays }: Props) => {
  return (
    <div className="w-full rounded-xl">
      <div className="text-lg font-bold break-keep mb-2">
        올해의 기념일 계산기
      </div>
      <div>
        {holidays.map((days) => (
          <div
            key={days.name}
            className="font-normal mb-2 bg-gray_02 p-2 rounded-xl break-keep"
          >
            <div>날짜 : {days.date}</div>
            <div>
              기념일 :{' '}
              <span className="text-text_black font-bold">{days.name}</span>
            </div>
            <div>설명 : {days.description}</div>
            <div>
              D-day(오늘 기준) :{' '}
              <span className="text-salmon_02 font-semibold">
                {days.d_day}일
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
