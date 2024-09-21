import { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  required?: boolean;
  prefixIcon?: ReactNode;
  postfixIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, required, prefixIcon, postfixIcon, className, ...props },
    ref
  ) => {
    return (
      <div className="w-full max-w-sm mb-1">
        {label && (
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={props.id || props.name}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div
          className={clsx(
            "relative  border rounded-lg border-gray-400 w-full flex gap-1 focus-within:border-gray-500 focus-within:transition-all focus-within:duration-300 focus-within:ease-in-out",
            error && "border-red-500"
          )}
        >
          {prefixIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              "flex-1 outline-none border-none bg-transparent",

              className
            )}
            {...props}
          />
          {postfixIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {postfixIcon}
            </div>
          )}
        </div>
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
