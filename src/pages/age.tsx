import AgeCalculator from '@/components/ageCalculator';
import Description from '@/components/description';
import HeadMeta from '@/components/meta/headMeta';
import Link from 'next/link';

const AgePage = () => {
  return (
    <>
      <HeadMeta
        title="만 나이 계산기"
        description="만 나이를 계산해보세요 !"
        url="https://d-day.zizzi.world/age"
        keywords="만 나이, 나이 계산, 나이"
      />
      <main className="w-creen h-screen">
        <div className="w-full h-[60px] bg-green_01 font-bold text-[22px] text-text_black flex items-center justify-center">
          만 나이 계산기
        </div>
        <div className="w-full bg-gray_01 h-[calc(100%-60px)] p-2">
          <div className="w-[248px] h-full m-auto flex flex-col gap-4 relative">
            <Description>
              대한민국은 23.06.28일부로 계산법이 만 나이로 바뀌게됩니다.
              <br /> 아래 태어난 날을 입력하여 현재 만 나이를 계산해보세요 !
            </Description>
            <AgeCalculator />
            <Link
              href={'/'}
              className="rounded-xl w-full h-[44px] flex items-center justify-center box-border p-2 text-center break-keep bg-salmon_02 text-sm font-bold text-text_white"
            >
              d-day를 계산하고 싶다면? <br />
              👉 d-day 계산하러 가기 !
            </Link>
            <div className="absolute bottom-1 text-text_gray_01 font-normal text-xs w-full p-2 box-border text-center">
              ⓒ 2023. zizzi project all rights reserved.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AgePage;
