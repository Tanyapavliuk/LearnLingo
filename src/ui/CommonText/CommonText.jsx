export const CommonText = ({ className = "", children }) => {
  return (
    <span
      className={`text-neutral-900 text-sm lg:text-base font-medium leading-normal ${className}`}
    >
      {children}
    </span>
  );
};
