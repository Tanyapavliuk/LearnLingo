import { Field, Formik } from "formik";
import { CommonText } from "../../ui/CommonText";
import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";
import { Input } from "../../ui/Input";
import { Btn } from "../../ui/Btn";
import { BookSchema } from "../../helpers/yupSchemas/schemas";
import noChecked from "../../assets/noCheched.svg";
import checked from "../../assets/Cheked.svg";
import { GrayText } from "../../ui/GrayText/GrayText";

const arrayReason = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

export const BookLessonModal = ({ onClose, el }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Book trial lesson</PopUpTitle>
        <p className="w-full text-neutral-900 text-opacity-80 text-base font-normal leading-snug">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className="flex gap-[14px] mb-10">
          <div className="rounded-[100px] w-[44px] h-[44px] overflow-hidden">
            <img
              src={el.avatar_url}
              className="object-cover w-[44px] h-[44px]"
            />
          </div>
          <div>
            <GrayText className="text-xs">Your teacher</GrayText>
            <p className="text-2xl font-medium">{el.name}</p>
          </div>
        </div>
        <h2 className="w-full text-neutral-900 leading-8 text-2xl font-medium">
          What is your main reason for learning English?
        </h2>
        <Formik
          initialValues={{ fullName: "", email: "", number: "", reason: "" }}
          validationSchema={BookSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-5 mb-10 flex flex-col gap-[18px]">
                <ul className="flex flex-col gap-[18px] mb-10">
                  {arrayReason.map((el) => (
                    <li key={el} className="min-content">
                      <label className="flex gap-2">
                        <Field
                          type="radio"
                          name="reason"
                          value={el}
                          className="sr-only"
                        />
                        <img src={values.reason === el ? checked : noChecked} />
                        <CommonText>{el}</CommonText>
                      </label>
                    </li>
                  ))}
                </ul>
                <Input
                  type="text"
                  name="fullName"
                  label="Full Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  error={errors.fullName}
                />
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                />
                <Input
                  type="number"
                  name="number"
                  label="Phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                  error={errors.number}
                />
              </div>
              <Btn type="submit" disabled={isSubmitting} className="w-full">
                Book
              </Btn>
            </form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};
