import React from "react";
import Modal from "react-modal";
import CloseIcon from "@assets/images/icons/Close.svg?react";
import { useTheme } from "@src/providers/ThemeProvider";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const CustomModal: React.FC<ModalProps> = ({
  onClose,
  isOpen,
  content,
  title,
  subtitle,
}) => {
  const { theme } = useTheme();
  return (
    <Modal
      onRequestClose={onClose}
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(17, 24, 39, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "rgba(18, 26, 43, 0.04)",
          border: 0,
          background: theme === "dark" ? "#0E1218" : "white",
        },
      }}
      shouldCloseOnEsc
      // className="ReactModal__Content dark:!bg-cardBackground-dark"
    >
      {title && (
        <h3 className="text-lg font-semibold text-[#1A202C] dark:text-white mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-[#4B5563] dark:text-white mb-8">
          {subtitle}
        </p>
      )}
      <div
        className="absolute top-4 right-4 cursor-pointer hover:text-red-600"
        onClick={onClose}
        aria-label="Close"
      >
        <CloseIcon width={24} height={24} />
      </div>
      {content}
    </Modal>
  );
};

export default CustomModal;
