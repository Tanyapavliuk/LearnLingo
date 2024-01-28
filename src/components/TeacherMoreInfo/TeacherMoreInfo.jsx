import { CommonText } from "../../ui/CommonText";
import { GrayText } from "../../ui/GrayText";

import star from "../../assets/star.svg";

export const TeacherMoreInfo = ({ el }) => {
  return (
    <div className="mt-4">
      <CommonText>{el.experience}</CommonText>
      <ul className="mt-8">
        {el.reviews.map((el, ind) => (
          <li key={ind} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-[100px] w-[44px] h-[44px] overflow-hidden">
                <img
                  src={el.image}
                  className="object-cover w-[44px] h-[44px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <GrayText>{el.reviewer_name}</GrayText>
                <p className="flex gap-2">
                  <img src={star} />
                  <CommonText>{el.reviewer_rating}</CommonText>
                </p>
              </div>
            </div>
            <CommonText>{el.comment}</CommonText>
          </li>
        ))}
      </ul>
    </div>
  );
};
