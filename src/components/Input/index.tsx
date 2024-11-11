import { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  required?: boolean;
  prefixIcon?: ReactNode;
  postfixIcon?: ReactNode;
  hideError?: boolean;
  wrapperClassName?: string;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      required,
      prefixIcon,
      postfixIcon,
      hideError = false,
      wrapperClassName,
      containerClassName,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx([`w-full mb-1`, containerClassName])}>
        {label && (
          <label
            className="block text-sm font-medium mb-1"
            htmlFor={props.id || props.name}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div
          className={clsx([
            "relative  border rounded-lg border-border-light dark:border-border-dark w-full flex gap-1 focus-within:border-gray-500 focus-within:transition-all focus-within:duration-300 focus-within:ease-in-out",
            error && "border-red-500",
            wrapperClassName,
          ])}
        >
          {prefixIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx([
              "flex-1 outline-none border-none text-text-subbed dark:text-text-darkSubbed bg-transparent dark:placeholder:text-white pl-3 py-3",
              prefixIcon && "!pl-10",
              className,
            ])}
            {...props}
          />
          {postfixIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {postfixIcon}
            </div>
          )}
        </div>
        {!hideError && <p className="text-red-500 text-sm h-4">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
