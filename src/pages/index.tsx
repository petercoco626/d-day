import { checkIsDateValidation, dDayDays, dDayYearMonthDay } from '@/libs/date';
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
    <main className="w-screen h-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <form
          onSubmit={handleSubmit(valid, inValid)}
          className="flex flex-col gap-4 "
        >
          <input
            type="date"
            {...register('startDate', {
              required: '날짜를 입력해 주세요',
            })}
            placeholder="날짜를 입력해 주세요."
          ></input>
          <input
            type="date"
            {...register('endDate', {
              required: '날짜를 입력해 주세요',
            })}
            placeholder="날짜를 입력해 주세요."
          ></input>
          <button>날짜 차이 구하기</button>
        </form>
        {result && (
          <div className="flex flex-col gap-2">
            <div>{result.resultYMD}</div>
            <div>{result.resultD}</div>
          </div>
        )}
      </div>
    </main>
  );
}
