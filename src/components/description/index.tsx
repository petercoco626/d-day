import { HTMLAttributes } from 'react';

type DescriptionProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Description = ({ children }: DescriptionProps) => {
  return (
    <div className=" text-center font-normal text-sm text-text_gray_02 w-full p-2 box-border rounded-xl bg-gray_02 flex items-center justify-center break-keep">
      {children}
    </div>
  );
};

export default Description;
