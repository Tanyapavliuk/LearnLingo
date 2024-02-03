export const LangBtn = ({ className = "", children }) => {
  return (
    <div
      className={`px-3 py-2 rounded-[35px] border border-neutral-900 border-opacity-20 justify-center items-center gap-1 inline-flex ${className}`}
    >
      <p className="text-neutral-900 text-sm font-medium leading-none">
        {children}
      </p>
    </div>
  );
};
