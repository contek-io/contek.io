import { cn } from '@/utils/classname';

interface IContainer {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container = ({ children, className }: IContainer) => (
  <div
    className={cn([
      'mx-auto w-full max-w-[--contek-max-width-laptop] px-[--contek-padding-x-mobile] py-8 tablet:px-[--contek-padding-x-tablet] laptop:px-[--contek-padding-x-laptop] desktop:max-w-[--contek-max-width] desktop:px-[--contek-padding-x-desktop]',
      className,
    ])}
  >
    {children}
  </div>
);
