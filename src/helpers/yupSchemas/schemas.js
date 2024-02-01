import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short name!")
    .max(50, "Too Long name!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short password!")
    .max(50, "Too Long password!")
    .required("Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short password!")
    .max(50, "Too Long password!")
    .required("Required"),
});
export const BookSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  number: Yup.string()
    .min(9, "Min 9 symbols")
    .max(12, "Max 12 symbols")
    .required("Required"),
});
