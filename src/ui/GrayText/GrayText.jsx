export const GrayText = ({ className = "", children }) => {
  return (
    <span
      className={`text-zinc-500 text-sm lg:text-base font-medium leading-normal ${className}`}
    >
      {children}
    </span>
  );
};
