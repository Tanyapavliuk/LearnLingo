export const StyledLink = ({ children }) => {
  return (
    <p className="text-neutral-900 text-base font-normal leading-tight hover:scale-110 hover:after:content'' hover:after:block hover:after:h-[1px] hover:after:bg-amber-400 hover:after:animate-line">
      {children}
    </p>
  );
};
