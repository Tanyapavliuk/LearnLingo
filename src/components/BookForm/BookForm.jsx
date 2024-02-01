import { Field, Formik } from "formik";
import { CommonText } from "../../ui/CommonText";
import { Input } from "../../ui/Input";
import { Btn } from "../../ui/Btn";
import { BookSchema } from "../../helpers/yupSchemas/schemas";
import noChecked from "../../assets/noCheched.svg";
import checked from "../../assets/Cheked.svg";

const arrayReason = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

export const BookForm = () => {
  return (
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
  );
};
