// import { useFormik } from "formik";
// import Link from "next/link";
// import * as Yup from "yup";

// export default function Register() {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string()
//         .min(6, "Pasword must be more than 6 characters")
//         .required("Required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Register Values:", values);
//       alert("Register successful");
//     },
//   });
//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="max-w-md mx-auto p-4 space-y-4 border flex flex-col justify-center rounded-lg mt-10"
//     >
//       <div>
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="text"
//           name="email"
//           id=""
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           className="outline-none border w-full p-2 rounded-lg"
//         />
//       </div>
//       {formik.touched.email && formik.errors.email && (
//         <div className="text-red-500">{formik.errors.email}</div>
//       )}

//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           id=""
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           className="p-2 border w-full outline-none rounded-lg"
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div className="text-red-700">{formik.errors.password}</div>
//         )}
//       </div>

//       <div>
//         <label>Confirm Password</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           id=""
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//           className="w-full p-2 outline-none border rounded-lg"
//         />
//       </div>
//       {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//         <div className="text-red-700">{formik.errors.confirmPassword}</div>
//       )}

//       <button
//         type="submit"
//         disabled={formik.isSubmitting}
//         className="bg-green-600 text-white p-2 w-full rounded-lg"
//       >
//         Submit
//       </button>

//       <div>
//         <Link href={"login"}>
//           Already have an account? <span className="text-blue-600">Login</span>
//         </Link>
//       </div>
//     </form>
//   );
// }
