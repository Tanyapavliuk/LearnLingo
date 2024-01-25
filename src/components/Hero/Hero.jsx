import { MainInfo } from "../HeroLeftSide";
import { ImageContent } from "../HeroRSide";

export const Hero = () => {
  return (
    <section className="grid px-[4rem] gap-6 grid-cols-[1.5fr_1fr] mb-6">
      <MainInfo />
      <ImageContent />
    </section>
  );
};
