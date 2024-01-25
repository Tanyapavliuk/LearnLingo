export const BtnText = ({ className = "", children }) => {
  return (
    <p
      className={`text-neutral-900 text-base font-bold leading-tight ${className}`}
    >
      {children}
    </p>
  );
};
