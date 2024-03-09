import { cn } from '@/utils/classname';

interface IContainer {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container = ({ children, className }: IContainer) => (
  <div
    className={cn([
      'tablet:px-[--contek-padding-x-tablet] laptop:px-[--contek-padding-x-laptop] desktop:px-[--contek-padding-x-desktop] mx-auto w-full max-w-[--contek-max-width] px-[--contek-padding-x-mobile] py-8',
      className,
    ])}
  >
    {children}
  </div>
);
