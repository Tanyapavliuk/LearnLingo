export const GrayText = ({ className = "", children }) => {
  return (
    <span
      className={`text-zinc-500 text-base font-medium leading-normal ${className}`}
    >
      {children}
    </span>
  );
};
