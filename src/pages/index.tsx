import {
  checkIsDateValidation,
  dDayDays,
  dDayYearMonthDay,
  getDayOnDate,
} from '@/libs/date';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
    reset,
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
      console.log('뒤에 날짜보다 앞에 날짜가 앞설수 없습니다.');

      return;
    }

    const diffDays = dDayDays(startDateOnResult, endDateOnResult);
    const diffYearMonthDay = dDayYearMonthDay(
      startDateOnResult,
      endDateOnResult
    );
    setResult({
      resultYMD: `${diffYearMonthDay[0]}년 ${diffYearMonthDay[1]}월 ${diffYearMonthDay[2]}일 남았습니다.`,
      resultD: `${diffDays}일 남았습니다.`,
    });
    reset();
  };
  const inValid = () => {};

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-[60px] bg-[#83C5BE] font-bold text-[22px] text-[#222222] flex items-center justify-center">
        D-day 계산기, 날짜 계산기
      </div>
      <div className="w-full bg-[#EDF6F9] h-[calc(100%-60px)] relative">
        <div className="flex flex-col gap-8 w-[248px] m-auto">
          <form
            onSubmit={handleSubmit(valid, inValid)}
            className="flex flex-col gap-4  mt-8 "
          >
            <div className="w-full gap-1 flex justify-center items-center">
              <input
                type="date"
                {...register('startDate', {
                  required: '날짜를 입력해 주세요',
                })}
                placeholder="날짜를 입력해 주세요."
                className="w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-[#D8DFE1] border-solid px-[14px] py-[24px] box-border"
                value={`${startDate} ${getDayOnDate(new Date(startDate))}`}
              />
              에서
            </div>
            <div className="w-full gap-1 flex justify-center items-center">
              <input
                type="date"
                {...register('endDate', {
                  required: '날짜를 입력해 주세요',
                })}
                placeholder="날짜를 입력해 주세요."
                className="w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-[#D8DFE1] border-solid px-[14px] py-[24px] box-border"
                value={`${endDate} ${getDayOnDate(new Date(endDate))}`}
              />
              까지
            </div>
            <button className="rounded-xl w-full h-[44px] flex items-center justify-center bg-[#006D77] text-base font-bold text-[#ffffff]">
              며칠 남았나요?
            </button>
          </form>
          {result && (
            <div className="flex flex-col gap-2 w-full h-[80px] rounded-xl">
              <div>{result.resultYMD}</div>
              <div>{result.resultD}</div>
            </div>
          )}
          <div className=" text-center font-normal text-sm text-[#666666] w-full h-[75px] rounded-xl bg-[#D8DFE1] flex items-center justify-center">
            기본으로 오늘 날짜로 설정되어 있습니다.
            <br />
            오늘을 포함해서 계산해 줍니다.
            <br />
            예시) 오늘~내일을 계산하면 D-1입니다.
          </div>
        </div>
        <div className="text-[#AAAAAA] font-normal text-xs w-full p-2 box-border text-center absolute bottom-4 ">
          ⓒ 2023. zizzi project all rights reserved.
        </div>
      </div>
    </main>
  );
}
