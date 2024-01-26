import { Formik } from "formik";
import { Btn } from "../../ui/Btn";
import { Input } from "../../ui/Input";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.js";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          )
            .then((userCredential) => {
              updateProfile(auth.currentUser, {
                displayName: values.name,
              });
              setUser(auth.currentUser);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
          setSubmitting(false);
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
            {user ? user.email : null}
            <div className="my-10 flex flex-col gap-[18px]">
              <Input
                type="name"
                name="name"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
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
              Sign Up
            </Btn>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
