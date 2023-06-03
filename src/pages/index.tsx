import DateCalculator from '@/components/dateCalculator';
import Description from '@/components/description';
import Holidays from '@/components/holidays';
import HeadMeta from '@/components/meta/headMeta';
import { HOLIDAYS } from '@/constants/date';
import { HolidaysType } from '@/types/date';
import Link from 'next/link';

type Props = {
  holidays: HolidaysType[];
};

export default function Home({ holidays }: Props) {
  return (
    <>
      <HeadMeta
        title="D-day 날짜 계산기"
        description="정말 쉬운 D-day 계산 ! 두개의 날짜를 선택하여 며칠이 남았는지 계산해보세요 ! 월별 기념일도 확인해보세요 !"
        url="https://d-day.zizzi.world"
        keywords="D-day, 날짜 계산, 기념일 계산, 커플 기념일"
      />
      <main className="w-screen">
        <div className="w-full h-[60px] bg-green_01 font-bold text-[22px] text-text_black flex items-center justify-center">
          D-day 계산기, 날짜 계산기
        </div>
        <div className="w-full bg-gray_01 h-[calc(100%-60px)]">
          <div className="w-[248px] h-full m-auto flex flex-col justify-between">
            <div className="w-full flex flex-col gap-8 mt-2 mb-4 ">
              <Description>
                D데이(D-Day)는 전략적 공격 또는 작전 개시 시간을 나타내는 데
                자주 사용되는 미국의 군사 용어이다.
                <br /> 어두의 ‘D’의 유래에 대해서는 여러 설이 있지만, 막연한
                날짜를 나타내는 Day의 약자라는 해석이 있다.
              </Description>
              <DateCalculator />
              <Description>
                기본으로 오늘 날짜로 설정되어 있습니다.
                <br />
                오늘을 포함해서 계산해 줍니다.
                <br />
                예시) 오늘~내일을 계산하면 D-1입니다.
              </Description>
              <Holidays holidays={holidays} />
              <Link
                href={'/age'}
                className="rounded-xl w-full h-[44px] flex items-center justify-center box-border p-2 text-center break-keep bg-salmon_02 text-sm font-bold text-text_white"
              >
                만 나이가 궁금하다면? <br />
                👉 만 나이 계산하러가기 !
              </Link>
            </div>
            <div className="text-text_gray_01 font-normal text-xs w-full p-2 box-border text-center">
              ⓒ 2023. zizzi project all rights reserved.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const holidays = HOLIDAYS;
  return {
    props: {
      holidays,
    },
  };
};
