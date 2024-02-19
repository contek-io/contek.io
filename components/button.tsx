export const Button = ({ children }: { children?: React.ReactNode }) => (
  <div>
    <button className="relative h-[56px] flex justify-center items-center pl-6 pr-14 bg-[#1EA665] rounded-full font-semibold text-lg text-ellipsis overflow-hidden">
      {children}
      <span className="absolute w-10 h-10 flex flex justify-center items-center bg-[#FFF] top-2 right-2 rounded-full">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12L12 1M12 1H1M12 1V12"
            stroke="#101716"
            stroke-width="2"
          />
        </svg>
      </span>
    </button>
  </div>
);
