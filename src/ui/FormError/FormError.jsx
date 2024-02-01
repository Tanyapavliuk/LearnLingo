export const FormError = ({ children }) => {
  return (
    <p className="absolute right-5 text-[#FF5757] font-light text-xs tracking-[0.15rem] mb-1 leading-6">
      &#215;{children}
    </p>
  );
};
