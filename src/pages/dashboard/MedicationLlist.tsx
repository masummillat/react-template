import React, { useState } from "react";
import TimeCircleIcon from "@assets/images/icons/TimeCircle.svg?react";
import CustomModal from "@src/components/CustomModal";
import ScheduleMedicationForm from "./SchudleMedicationForm";

export interface IMedication {
  medicineName: string;
  amount: string;
  dose: string;
  frequency: string;
  reminder: string;
  note: string;
  taken: boolean;
}

const MedicationList: React.FC = () => {
  const [medications, setMedications] = useState<IMedication[]>([
    {
      medicineName: "Aspirin",
      amount: "1 Pill",
      dose: "100mg",
      frequency: "Once a day",
      reminder: "08:00 AM",
      note: "After breakfast",
      taken: false,
    },
    {
      medicineName: "Metformin",
      amount: "1 Pill",
      dose: "500mg",
      frequency: "Twice a day",
      reminder: "07:00 AM",
      note: "Before breakfast",
      taken: false,
    },
    {
      medicineName: "Lisinopril",
      amount: "1 Pill",
      dose: "20mg",
      frequency: "Once a day",
      reminder: "09:00 AM",
      note: "With water",
      taken: false,
    },
    {
      medicineName: "Atorvastatin",
      amount: "1 Pill",
      dose: "40mg",
      frequency: "Once a day",
      reminder: "10:00 PM",
      note: "Before bedtime",
      taken: false,
    },
  ]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCheckChange = (index: number) => {
    const updatedMedications = [...medications];
    updatedMedications[index].taken = !updatedMedications[index].taken;
    setMedications(updatedMedications);
  };
  const handleAddMedication = (data: IMedication) => {
    setMedications((prevMedications) => [...prevMedications, { ...data }]);
    setIsOpen(false);
  };

  return (
    <div className=" p-6 bg-cardBackground-light dark:bg-cardBackground-dark rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Take Medicine Today</h2>
        <div
          onClick={() => setIsOpen(true)}
          className="bg-[#00CD82] text-white  px-4 py-2 cursor-pointer rounded"
          //   onClick={handleAddMedication}
        >
          +
        </div>
      </div>

      {/* Medication List */}
      <ul className="space-y-3">
        {medications.map((med, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-[#D5F6E5] dark:bg-[#1D2025] rounded"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#475569] dark:text-[#E0E9E5]">
                {med.amount}, {med.note}
              </span>
              <span className="font-semibold text-sm">
                {med.medicineName}, {med.dose}
              </span>
              <span className="text-[13px] flex gap-1 items-center">
                <TimeCircleIcon color="#00CD82" width={16} height={16} />
                {med.reminder}
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                checked={med.taken}
                onChange={() => handleCheckChange(index)}
                className="w-5 h-5 border border-[#002B2B] dark:border-white"
              />
            </div>
          </li>
        ))}
      </ul>
      <CustomModal
        title="Schedule medicine"
        subtitle="Set reminders to stay on track with your medication schedule"
        isOpen={isOpen}
        onClose={handleClose}
        content={
          <ScheduleMedicationForm
            handleAdd={handleAddMedication}
            onClose={handleClose}
          />
        }
      />
    </div>
  );
};

export default MedicationList;
