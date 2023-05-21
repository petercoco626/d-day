import { HolidaysType } from '@/types/date';

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
            <div className="text-text_black font-bold text-lg">{days.name}</div>
            <div className="text-sm text-text_gray_02">{days.description}</div>
            <div>{days.date}</div>
            <div className="text-sm">
              D-day(오늘 기준) :{' '}
              <span className="text-salmon_02 font-semibold">
                {days.d_day}일 {days.d_day > 0 ? '남았습니다' : '지났습니다'}.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
