export const Input = ({ label, type, name, onChange, onBlur, value }) => {
  return (
    <div className="w-full h-[54px] py-4 px-4 rounded-xl border border-neutral-900 border-opacity-10 justify-start items-center gap-2 inline-flex">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full h-full inline-flex outline-none"
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
