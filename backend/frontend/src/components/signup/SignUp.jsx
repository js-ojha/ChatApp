import React from "react";
import { useForm } from "react-hook-form";
import { signupApi } from "../../api/ApiCalls";
import { Link } from "react-router-dom";
import { useAuth } from "../../helper/hooks";
import toast from "react-hot-toast";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setMeData } = useAuth();

  const onSubmit = async (data) => {
    const response = await signupApi(data);
    console.log("Singup Response", response);
    if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      setMeData(response.user);
      toast.success("Registered Successfully");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-3 justify-center border px-20 py-4 rounded-lg">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              placeholder="Enter name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
          </label>
          {errors.name && (
            <span className="text-sm text-red-500">This field is required</span>
          )}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                // pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              })}
            />
          </label>
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}

          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
