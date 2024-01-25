export const Text = ({ className = "", children }) => {
  return (
    <p
      className={`text-neutral-900 text-base font-normal leading-snug tracking-tight ${className}`}
    >
      {children}
    </p>
  );
};
