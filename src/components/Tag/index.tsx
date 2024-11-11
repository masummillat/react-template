import clsx from "clsx";
import React from "react";

interface TagProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  backgroundColor = "#ffffff",
  color = "#000000",
  borderColor = "#000000",
  className,
}) => {
  return (
    <div
      className={clsx([
        `px-[0.625rem] py-[0.125rem] rounded-3xl font-medium text-xs leading-[1.125rem] text-center w-fit border`,
        className,
      ])}
      style={{
        backgroundColor,
        color,
        borderColor,
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
