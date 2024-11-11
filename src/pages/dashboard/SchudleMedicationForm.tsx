import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@src/components/Input";
import { IMedication } from "./MedicationLlist";
import NotificationIcon from "@assets/images/icons/Notification.svg?react";

interface InputType {
  medicineName: string;
  amount: string;
  dose: string;
  frequency: string;
  reminder: string;
  note: string;
}

const schema: yup.ObjectSchema<InputType> = yup
  .object()
  .shape({
    medicineName: yup.string().required("Medicine name is required"),
    amount: yup.string().required("Amount is required"),
    dose: yup.string().required("Dose is required"),
    frequency: yup.string().required("Frequency is required"),
    reminder: yup.string().required("Reminder is required"),
    note: yup.string().required("Note is required"),
  })
  .required();

interface ICustomSignupLoginFormProps {
  onClose: () => void;
  handleAdd: (data: IMedication) => void;
}

const ScheduleMedicationForm: React.FC<ICustomSignupLoginFormProps> = ({
  onClose,
  handleAdd,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputType>({
    defaultValues: {
      medicineName: "",
      amount: "",
      dose: "",
      frequency: "",
      reminder: "",
      note: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: InputType) => {
    console.log(data);
    handleAdd({ ...data, taken: false });
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid dark:bg-">
      <Input
        label="Medicine name"
        placeholder="Medicine name"
        {...register("medicineName")}
        error={errors["medicineName"]?.message}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Amount"
          placeholder="Ex: 1 pills"
          {...register("amount")}
          error={errors["amount"]?.message}
        />
        <Input
          label="Dose"
          {...register("dose")}
          placeholder="Ex: 250mg"
          error={errors["dose"]?.message}
        />
      </div>
      <Input
        label="Frequency"
        placeholder="Frequency"
        type="date"
        {...register("frequency")}
        error={errors["frequency"]?.message}
      />
      <div className="flex gap-4 items-center">
        <Input
          prefixIcon={<NotificationIcon />}
          label="Reminder"
          placeholder="11.00AM"
          {...register("reminder")}
          error={errors["reminder"]?.message}
        />
        <button
          type="button"
          className="w-12 h-12 flex justify-center items-center bg-[#00CD82] rounded-lg"
        >
          +
        </button>
      </div>
      <Input
        label="Notes"
        {...register("note")}
        type="text"
        placeholder="Note here..."
        error={errors["note"]?.message}
      />
      <div className="grid grid-cols-2  gap-4 items-center text-[#1A202C] font-medium">
        <button
          onClick={onClose}
          className="block border py-2 px-4 rounded-lg "
          type="reset"
        >
          Cancel
        </button>
        <button
          className="block border py-2 px-4 bg-[#00CD82]  rounded-xl"
          type="submit"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default ScheduleMedicationForm;
