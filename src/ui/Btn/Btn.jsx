export const Btn = ({ children }) => {
  return (
    <button className="w-[267px] h-[60px] px-[88px] py-4 bg-accent hover:bg-btnHover hover:shadow rounded-xl justify-center items-center inline-flex">
      <p className="text-neutral-900 text-lg font-bold leading-7 whitespace-nowrap">
        {children}
      </p>
    </button>
  );
};
