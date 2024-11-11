/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Select, {
  components,
  GroupBase,
  OptionsOrGroups,
  SingleValueProps,
} from "react-select";
import ChevronDownIcon from "@assets/images/icons/ChevronDown.svg?react";
import { useTheme } from "@src/providers/ThemeProvider";

interface SelectWithIconProps {
  options: OptionsOrGroups<any, GroupBase<any>>;
  value: any;
  onChange: (newValue: any) => void;
}
const SelectWithIcon: React.FC<SelectWithIconProps> = ({
  options,
  value,
  onChange,
}) => {
  const { theme } = useTheme();
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator
        {...props}
        className="text-black dark:text-white"
      >
        <ChevronDownIcon width={22} />
      </components.DropdownIndicator>
    );
  };

  const { Option } = components;
  const IconOption = (props: any) => {
    return (
      <Option {...props} className="hover:bg-slate-300">
        <span style={{ marginLeft: "10px" }}>{props.data.label}</span>
      </Option>
    );
  };
  const SingleValue = ({ children, ...props }: SingleValueProps) => (
    <components.SingleValue
      {...props}
      className="dark:text-white text-text-primary"
    >
      {children}
    </components.SingleValue>
  );
  return (
    <Select
      className="sm:hidden block"
      onChange={(option: any) => onChange(option?.value)}
      value={options.filter((option) => option.value.toString() === value)}
      placeholder="All Features"
      styles={{
        menu: (base) => ({
          ...base,
          background: theme === "dark" ? "#0F1218" : "#ffffff",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          border: `1px solid ${theme === "dark" ? "#1D2025" : "#CCD0D0"}`,
          outline: 0,
          background: theme === "dark" ? "#1D2025" : "#ffffff",
          borderRadius: "8px",
          padding: "2px 8px",
          boxShadow: "none",
          width: "100%",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          color: theme === "dark" ? "#ffffff" : "#000000",
          backgroundColor: state.isSelected
            ? theme === "dark"
              ? "#050505"
              : "#F4F4F6"
            : "",
          ":hover": {
            // Overwrittes the different states of border
            backgroundColor: "#E9E9E9",
            color: "#000000",
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: theme === "dark" ? "#ffffff" : "#000000",
        }),
      }}
      options={options}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        Option: IconOption,
        SingleValue,
      }}
    />
  );
};

export default SelectWithIcon;
