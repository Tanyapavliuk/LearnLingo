export const CommonText = ({ className = "", children }) => {
  return (
    <span
      className={`text-neutral-900 text-base font-medium leading-normal ${className}`}
    >
      {children}
    </span>
  );
};
