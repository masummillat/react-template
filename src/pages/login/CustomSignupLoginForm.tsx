import Input from "@components/Input";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { webAuth } from "@libs/webAuth";

interface ICustomSignupLoginFormProps {
  show: boolean;
}

type InputType = {
  email: string;
  password: string;
  username: string;
};

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const CustomSignupLoginForm: React.FC<ICustomSignupLoginFormProps> = ({
  show,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputType>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: InputType) => {
    try {
      webAuth.signup(
        {
          connection: "Username-Password-Authentication",
          email: values.email,
          password: values.password,
          username: values.username,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function (err: any) {
          console.log(err);
          if (err) return alert("Something went wrong: " + err?.message);
          return alert("success signup without login!");
        }
      );
    } catch (error) {
      //   setError("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };
  console.log(show);
  return (
    <div className={clsx([`w-full `, show ? " animate-fadeIn" : "hidden"])}>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#CCD0D0] border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-lightBackground left-1/2 dark:text-white dark:bg-darkBackground">
          Sign Up with Email
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <Input
          label="Userame"
          className="border p-2 rounded"
          type="text"
          placeholder="Jhon Doe"
          {...register("username")}
          required
          error={errors["username"]?.message}
        />

        <Input
          label="Email"
          className="border p-2 rounded"
          type="email"
          placeholder="john.doe@example.com"
          {...register("email")}
          required
          error={errors["email"]?.message}
        />

        <Input
          label="Password"
          className="border p-2 rounded"
          type="password"
          placeholder="********"
          required
          {...register("password")}
          error={errors["password"]?.message}
        />

        <button
          className="w-full h-[3.5rem] flex justify-center items-center bg-[#00CD82] rounded-md"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CustomSignupLoginForm;
