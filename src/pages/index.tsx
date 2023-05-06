import {
  checkIsDateValidation,
  dDayDays,
  getYearMonthDayDiff,
} from '@/libs/date';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import IWarningCircle from '@/assets/icon/WarningCircle.svg';
import HeadMeta from '@/components/meta/headMeta';
import * as gtag from '@/libs/gtag';

type InputForm = {
  startDate: Date;
  endDate: Date;
};

type resultForm = {
  resultYMD: string;
  resultD: string;
} | null;

export default function Home() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: {
      startDate: new Date(),
    },
  });

  const startDate = watch('startDate');

  const endDate = watch('endDate');

  const [result, setResult] = useState<resultForm>(null);
  const valid = () => {
    const startDateOnResult = new Date(startDate);
    const endDateOnResult = new Date(endDate);

    if (!checkIsDateValidation(startDateOnResult, endDateOnResult)) {
      alert('시작 날짜보다 미래의 날짜를 넣어주세요.');

      return;
    }

    const diffDays = dDayDays(startDateOnResult, endDateOnResult);
    const diffYearMonthDay = getYearMonthDayDiff(
      startDateOnResult,
      endDateOnResult
    );
    setResult({
      resultYMD: `${diffYearMonthDay[0]}년 ${diffYearMonthDay[1]}개월 ${diffYearMonthDay[2]}일 남았습니다.`,
      resultD: `${diffDays}일 남았습니다.`,
    });
    gtag.event({
      action: 'click_main_calcualte_button',
      category: 'calculate',
      label: 'calculate',
      value: null,
    });
  };
  const inValid = () => {};

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
            <div className="w-full flex flex-col gap-8 ">
              <form
                onSubmit={handleSubmit(valid, inValid)}
                className="flex flex-col gap-4  mt-8 "
              >
                <div className="w-full gap-1 flex flex-col ">
                  <div className="w-full gap-1 flex justify-center items-center">
                    <input
                      type="date"
                      {...register('startDate', {
                        required: '날짜를 입력해 주세요',
                      })}
                      placeholder="날짜를 입력해 주세요."
                      className="w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-[#D8DFE1] border-solid px-[14px] py-[24px] box-border"
                    />
                    에서
                  </div>
                  {errors.startDate?.message && (
                    <div className="text-[#E29578] font-normal text-xs ml-4 flex gap-1">
                      <IWarningCircle />
                      {errors.startDate?.message}
                    </div>
                  )}
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <div className="w-full gap-1 flex justify-center items-center">
                    <input
                      type="date"
                      {...register('endDate', {
                        required: '날짜를 입력해 주세요',
                      })}
                      placeholder="날짜를 입력해 주세요."
                      className="w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-[#D8DFE1] border-solid px-[14px] py-[24px] box-border"
                    />
                    까지
                  </div>
                  {errors.endDate?.message && (
                    <div className="text-[#E29578] font-normal text-xs ml-4 flex gap-1">
                      <IWarningCircle />
                      {errors.endDate?.message}
                    </div>
                  )}
                </div>
                <button className="rounded-xl w-full h-[44px] flex items-center justify-center bg-[#006D77] text-base font-bold text-[#ffffff]">
                  며칠 남았나요?
                </button>
              </form>
              {result && (
                <div className="flex flex-col gap-2 w-full px-4 py-3 rounded-xl bg-[#E29578] p-2 box-border justify-center items-center">
                  <div>{result.resultD}</div>
                  {/* <div>{result.resultYMD}</div> */}
                </div>
              )}
              <div className=" text-center font-normal text-sm text-[#666666] w-full h-[75px] p-2 box-border rounded-xl bg-[#D8DFE1] flex items-center justify-center">
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
