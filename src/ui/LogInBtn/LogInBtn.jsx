import image from "../../assets/log-in.svg";
import { BtnText } from "../BtnText";
export const LogInBtn = ({ className = "", children }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <img src={image} />
      <BtnText>{children}</BtnText>
    </div>
  );
};
