"use client";
import React from "react";
import { useAuth } from "./AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be more than 6 characters"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const isSuccess = await login(values.email, values.password);
      if (!isSuccess) {
        setErrors({ email: "Invalid email or password" });
      }
      setSubmitting(false);
      alert("Login Successful");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4 border flex flex-col justify-center rounded-lg mt-10"
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-700">Welcome Back.</h2>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="text"
          name="email"
          id=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border w-full p-2 outline-none rounded-lg"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          id=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border w-full outline-none p-2 rounded-lg"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-blue-500 text-white p-2 w-full rounded-lg"
      >
        Login
      </button>
      <div>
        <Link href={"/register"}>
          Do not have an account?{" "}
          <span className="text-blue-600">Register</span>
        </Link>
      </div>
    </form>
  );
}
