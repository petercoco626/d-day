import { generateDateFormatYYYYMMDD, getCurrentAge } from '@/libs/date';
import { useForm } from 'react-hook-form';
import IWarningCircle from '@/assets/icon/WarningCircle.svg';
import { useState } from 'react';

type InputForm = {
  startDate: string;
};

const AgeCalculator = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: {
      startDate: generateDateFormatYYYYMMDD(new Date()),
    },
  });

  const [myAge, setMyAge] = useState<number | null>(null);

  const valid = (data: InputForm) => {
    setMyAge(getCurrentAge(new Date(data.startDate)));
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
                required: '태어난 날짜를 입력해 주세요',
              })}
              data-placeholder="태어난 날짜를 입력해 주세요"
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
        <button className="rounded-xl w-full h-[44px] flex items-center justify-center bg-green_02 text-base font-bold text-text_white">
          계산하기
        </button>
      </form>
      {myAge && (
        <div className="flex flex-col gap-2 w-full px-4 py-3 rounded-xl bg-salmon_02 p-2 box-border justify-center items-center">
          <div>만 {myAge}살 입니다.</div>
        </div>
      )}
    </>
  );
};

export default AgeCalculator;
