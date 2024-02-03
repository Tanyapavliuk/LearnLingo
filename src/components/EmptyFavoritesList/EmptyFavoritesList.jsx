import { CommonText } from "../../ui/CommonText";
import image from "../../assets/hero.webp";

export const EmptyFavoritesList = () => {
  return (
    <li className="flex flex-col gap-2 items-center">
      <div className="relative w-min-content h-min-content flex justify-center">
        <img src={image} className="" />
        <CommonText className="absolute top-5">
          While there are no favorites, add them by clicking on the heart
        </CommonText>
      </div>
    </li>
  );
};
