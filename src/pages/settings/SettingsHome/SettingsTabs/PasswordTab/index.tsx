import Input from "@src/components/Input";
import React from "react";
import EyeSlashIcon from "@assets/images/icons/EyeSlash.svg?react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckCircleIcon from "@assets/images/icons/CheckCircle.svg?react";

const isPasswordStrong = (
  password: string
): {
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSpecialChar: boolean;
  hasValidLength: boolean;
} => {
  const minLength = 8;

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasValidLength = password.length >= minLength;

  return {
    hasUppercase,
    hasLowercase,
    hasSpecialChar,
    hasValidLength,
  };
};

interface PasswordInputType {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const schema: yup.ObjectSchema<PasswordInputType> = yup
  .object()
  .shape({
    oldPassword: yup.string().required("Old password is required"),
    newPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .test(
        "has-uppercase",
        "Must contain at least one uppercase letter",
        (value) => /[A-Z]/.test(value || "")
      )
      .test(
        "has-lowercase",
        "Must contain at least one lowercase letter",
        (value) => /[a-z]/.test(value || "")
      )
      .test(
        "has-special-char",
        "Must contain at least one special character",
        (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value || "")
      ),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  })
  .required();
const PasswordTab: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordInputType>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: PasswordInputType) => {
    console.log(data);
  };

  const passwordStrength = isPasswordStrong(watch("newPassword"));
  return (
    <div className="border border-border-light dark:border-border-dark rounded-2xl  dark:bg-cardBackground-dark ">
      <div className="p-4 grid gap-1 border-b border-border-light dark:border-border-dark">
        <h2 className="text-lg font-semibold">Change your password</h2>
        <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
          Update your password to keep your account strong and secure.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className=" w-full md:w-1/2">
          <Input
            {...register("oldPassword")}
            label="Current Password"
            type="password"
            postfixIcon={
              <EyeSlashIcon className="text-[#002B2B] dark:text-white" />
            }
            error={errors["oldPassword"]?.message}
            placeholder="********"
          />
          <Input
            {...register("newPassword")}
            label="New Password"
            type="password"
            postfixIcon={
              <EyeSlashIcon className="text-[#002B2B] dark:text-white" />
            }
            error={errors["newPassword"]?.message}
            placeholder="********"
          />
          <Input
            {...register("confirmPassword")}
            label="Confirm Password"
            type="password"
            postfixIcon={
              <EyeSlashIcon className="text-[#002B2B] dark:text-white" />
            }
            error={errors["confirmPassword"]?.message}
            placeholder="********"
          />
        </div>

        <ul className="text-text-subbed dark:text-text-darkSubbed text-sm grid gap-1">
          <li
            className="flex gap-1 items-center"
            style={{
              color: passwordStrength.hasValidLength ? "#00CD82" : "red",
            }}
          >
            <CheckCircleIcon />
            <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
              Minimum 8 characters
            </p>
          </li>
          <li
            className="flex gap-1 items-center"
            style={{ color: passwordStrength.hasUppercase ? "#00CD82" : "red" }}
          >
            <CheckCircleIcon />
            <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
              At least one uppercase letter
            </p>
          </li>
          <li
            className="flex gap-1 items-center"
            style={{ color: passwordStrength.hasLowercase ? "#00CD82" : "red" }}
          >
            <CheckCircleIcon />
            <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
              At least one lowercase letter
            </p>
          </li>
          <li
            className="flex gap-1 items-center"
            style={{
              color: passwordStrength.hasSpecialChar ? "#00CD82" : "red",
            }}
          >
            <CheckCircleIcon />
            <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
              At least one special character
            </p>
          </li>
        </ul>
        <br />
        <div className="flex gap-4 justify-end items-center">
          <button className="border border-border-light dark:border-border-dark p-2 px-4 rounded-lg w-full sm:w-fit">
            Cancel
          </button>
          <button className="bg-primary-light border border-primary-light p-2 px-4 rounded-lg w-full sm:w-fit text-[#1A202C]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordTab;
