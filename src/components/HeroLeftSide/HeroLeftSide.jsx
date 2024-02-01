import { Link } from "react-router-dom";
import { Btn } from "../../ui/Btn";
import { Text } from "../../ui/Text";

export const MainInfo = () => {
  return (
    <div className="bg-stone-50/70 lg:bg-stone-50 @container/box rounded-[30px] w-full h-full px-[4rem] py-[6.125rem]">
      <h1 className=" @[0rem]/box:w-[90cqw] text-neutral-900 text-5xl font-medium leading-[56px] tracking-tighter mb-8">
        Unlock your potential with the best{" "}
        <span className=" font-normal italic h-10 bg-amber-100 rounded-lg">
          language
        </span>{" "}
        tutors
      </h1>
      <Text className="@[0rem]/box:w-[75cqw] mb-16">
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </Text>
      <Link to="/teachers">
        <Btn className="w-[267px]">Get started</Btn>
      </Link>
    </div>
  );
};
