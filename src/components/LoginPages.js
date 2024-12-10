import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import UserContextt from "../utils/UserContextt";

const LoginPage = ({ setShow }) => {
  const { setUserInfo } = useContext(UserContextt);
  const handleChange = () => {
    setShow();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setUserInfo({ name: values.email, password: values.password });
        alert("Login Successfull");
        setSubmitting(false);
        setShow();
      }, 3000);
    },
  });
  return (
    <div onClick={handleChange}>
      <div className='fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm flex justify-center items-center '>
        <div
          className='h-[450px] w-[350px] bg-slate-200 border-2  border-neutral-500 rounded-lg  shadow-lg shadow-stone-700 flex flex-col items-center'
          onClick={(e) => e.stopPropagation()}
        >
          <span className='font-bold text-2xl text-emerald-400 pt-5 pb-8'>
            Login
          </span>
          <div>
            <form
              onSubmit={formik.handleSubmit}
              className='flex flex-col text-left w-[280px] gap-1 '
            >
              <label htmlFor='email' className='text-lg text-cyan-700'>
                Email Address:
              </label>
              <input
                className='h-8 rounded-md border border-gray-200'
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-600 text-sm'>
                  {formik.errors.email}
                </div>
              ) : null}
              <label htmlFor='password' className='text-lg text-cyan-700 mt-5'>
                Password:
              </label>
              <input
                className='h-8 rounded-md border border-gray-200'
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='text-red-600 text-sm'>
                  {formik.errors.password}
                </div>
              ) : null}

              <button
                type='submit'
                className={` mt-5 rounded-md h-9  ${
                  formik.isSubmitting
                    ? "bg-emerald-300 cursor-not-allowed"
                    : "bg-emerald-500 "
                }`}
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
