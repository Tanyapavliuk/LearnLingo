export const Btn = ({ type = "button", className = "", children }) => {
  return (
    <button
      type={type}
      className={` h-[60px] px-3 lg:px-[88px] py-4 bg-accent hover:bg-btnHover hover:shadow rounded-xl justify-center items-center inline-flex ${className}`}
    >
      <p className="text-neutral-900 text-lg font-bold leading-7 whitespace-nowrap">
        {children}
      </p>
    </button>
  );
};
