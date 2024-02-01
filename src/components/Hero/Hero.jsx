import { MainInfo } from "../HeroLeftSide";
import { ImageContent } from "../HeroRSide";

export const Hero = () => {
  return (
    <section className="relative grid mx-4 lg:mx-[4rem] gap-6 lg:grid-cols-[1.5fr_1fr] mb-6">
      <MainInfo />
      <ImageContent />
    </section>
  );
};
