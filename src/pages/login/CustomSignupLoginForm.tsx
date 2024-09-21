import { useAuth0 } from "@auth0/auth0-react";
import Input from "@components/Input";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ICustomSignupLoginFormProps {
  show: boolean;
}

type InputType = {
  email: string;
  password: string;
  name: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
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
  const { loginWithRedirect } = useAuth0();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputType>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    try {
      await loginWithRedirect({
        username: values.email,
        password: values.password,
        name: name,
        authorizationParams: {
          screen_hint: "signup",
        },
      });
    } catch (error) {
      //   setError("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };
  console.log(show);
  return (
    <div className={clsx([`w-full `])}>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#CCD0D0] border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-lightBackground left-1/2 dark:text-white dark:bg-darkBackground">
          Sign Up with Email
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        <Input
          label="Name"
          className="border p-2 rounded"
          type="text"
          id="name"
          {...register("name")}
          required
          error={errors["name"]?.message}
        />

        <Input
          label="Email"
          className="border p-2 rounded"
          type="email"
          id="email"
          {...register("email")}
          required
          error={errors["email"]?.message}
        />

        <Input
          label="Password"
          className="border p-2 rounded"
          type="password"
          id="password"
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
