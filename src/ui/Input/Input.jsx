import { FormError } from "../FormError";

export const Input = ({
  label,
  type,
  name,
  onChange,
  onBlur,
  value,
  error,
}) => {
  return (
    <div className="relative w-full h-[54px] py-4 px-4 rounded-xl border border-neutral-900 border-opacity-10 justify-start items-center gap-2 inline-flex">
      <label htmlFor={name} className="text-nowrap">
        {label}
      </label>
      <input
        className="w-full h-full inline-flex outline-none"
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error ? <FormError>{error}</FormError> : null}
    </div>
  );
};
