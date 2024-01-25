import hero from "../../assets/hero.webp";

export const ImageContent = () => {
  return (
    <div className="h-full w-full rounded-[30px] overflow-hidden">
      <img
        src={hero}
        alt="Unlock your potential with the best  language tutors"
        className="h-full object-cover"
      />
    </div>
  );
};
