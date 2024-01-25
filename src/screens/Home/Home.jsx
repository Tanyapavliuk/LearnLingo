import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { HeroFooter } from "../../components/HomeFooter";

export const Home = () => {
  return (
    <div className="min-h-screen grid grid-rows-[min-content_1fr_min-content] pb-8">
      <Header />
      <Hero />
      <HeroFooter />
    </div>
  );
};
