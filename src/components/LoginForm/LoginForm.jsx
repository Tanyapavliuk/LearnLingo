import { useState } from "react";
import { app } from "../../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

import { Btn } from "../../ui/Btn";
import { Input } from "../../ui/Input";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = ({ onClose }) => {
  const auth = getAuth(app);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
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
          <div className="my-10 flex flex-col gap-[18px]">
            <Input
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.password && touched.password && errors.password}
          </div>
          <Btn type="submit" disabled={isSubmitting} className="w-full">
            Log in
          </Btn>
        </form>
      )}
    </Formik>
  );
};
