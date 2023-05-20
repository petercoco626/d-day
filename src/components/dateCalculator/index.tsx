import {
  dDayDays,
  generateDateFormatYYYYMMDD,
  getYearMonthDayDiff,
} from '@/libs/date';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import IWarningCircle from '@/assets/icon/WarningCircle.svg';
import * as gtag from '@/libs/gtag';

type InputForm = {
  startDate: string;
  endDate: string;
};

type resultForm = {
  resultYMD: string;
  resultD: string;
} | null;

const DateCalculator = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: {
      startDate: generateDateFormatYYYYMMDD(new Date()),
      endDate: '',
    },
  });

  const startDate = watch('startDate');

  const endDate = watch('endDate');

  const [result, setResult] = useState<resultForm>(null);
  const valid = () => {
    const startDateOnResult = new Date(startDate);
    const endDateOnResult = new Date(endDate);
    const diffDays = dDayDays(startDateOnResult, endDateOnResult);
    const diffYearMonthDay = getYearMonthDayDiff(
      startDateOnResult,
      endDateOnResult
    );

    setResult({
      resultYMD: `${diffYearMonthDay[0]}년 ${diffYearMonthDay[1]}개월 ${diffYearMonthDay[2]}일 남았습니다.`,
      resultD: `${diffDays}일 ${diffDays >= 0 ? '남았습니다.' : '지났습니다.'}`,
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
      <form
        onSubmit={handleSubmit(valid, inValid)}
        className="flex flex-col gap-4"
      >
        <div className="w-full gap-1 flex flex-col ">
          <div className="w-full gap-1 flex justify-center items-center">
            <input
              type="date"
              {...register('startDate', {
                required: '날짜를 입력해 주세요',
              })}
              data-placeholder="날짜를 입력해 주세요."
              aria-required="true"
              required
              className="before:text-text_gray_01 focus:before:hidden valid:before:hidden before:content-[attr(data-placeholder)] before:w-full  w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-gray_02 border-solid px-[14px] py-[24px] box-border"
            />
            에서
          </div>
          {errors.startDate?.message && (
            <div className="text-salmon_02 font-normal text-xs ml-4 flex gap-1">
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
              data-placeholder="날짜를 입력해 주세요."
              aria-required="true"
              required
              className="before:text-text_gray_01 focus:before:hidden valid:before:hidden before:content-[attr(data-placeholder)] before:w-full w-[200px] h-[48px] rounded-xl bg-white border-[1px] border-gray_02 border-solid px-[14px] py-[24px] box-border"
            />
            까지
          </div>
          {errors.endDate?.message && (
            <div className="text-salmon_02 font-normal text-xs ml-4 flex gap-1">
              <IWarningCircle />
              {errors.endDate?.message}
            </div>
          )}
        </div>
        <button className="rounded-xl w-full h-[44px] flex items-center justify-center bg-green_02 text-base font-bold text-text_white">
          며칠 남았나요?
        </button>
      </form>
      {result && (
        <div className="flex flex-col gap-2 w-full px-4 py-3 rounded-xl bg-salmon_02 p-2 box-border justify-center items-center">
          <div>{result.resultD}</div>
          {/* <div>{result.resultYMD}</div> */}
        </div>
      )}
    </>
  );
};

export default DateCalculator;
