import DateCalculator from '@/components/dateCalculator';
import HeadMeta from '@/components/meta/headMeta';

export default function Home() {
  return (
    <>
      <HeadMeta
        title="d-day 날짜 계산기"
        description="두개의 날짜를 선택하여 며칠이 남았는지 계산해보세요 !"
        url="https://d-day-lyart.vercel.app"
        keywords="d-day, 날짜 계산"
      />
      <main className="w-screen h-screen">
        <div className="w-full h-[60px] bg-[#83C5BE] font-bold text-[22px] text-[#222222] flex items-center justify-center">
          D-day 계산기, 날짜 계산기
        </div>
        <div className="w-full bg-[#EDF6F9] h-[calc(100%-60px)]">
          <div className="w-[248px] h-full m-auto flex flex-col justify-between">
            <div className="w-full flex flex-col gap-8 mt-2 ">
              <div className=" text-center font-normal text-sm text-[#666666] w-full p-2 box-border rounded-xl bg-[#D8DFE1] flex items-center justify-center break-keep">
                D데이(D-Day)는 전략적 공격 또는 작전 개시 시간을 나타내는 데
                자주 사용되는 미국의 군사 용어이다.
                <br /> 어두의 ‘D’의 유래에 대해서는 여러 설이 있지만, 막연한
                날짜를 나타내는 Day의 약자라는 해석이 있다.
              </div>
              <DateCalculator />
              <div className=" text-center font-normal text-sm text-[#666666] w-full p-2 box-border rounded-xl bg-[#D8DFE1] flex items-center justify-center break-keep">
                기본으로 오늘 날짜로 설정되어 있습니다.
                <br />
                오늘을 포함해서 계산해 줍니다.
                <br />
                예시) 오늘~내일을 계산하면 D-1입니다.
              </div>
            </div>
            <div className="text-[#AAAAAA] font-normal text-xs w-full p-2 box-border text-center">
              ⓒ 2023. zizzi project all rights reserved.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
