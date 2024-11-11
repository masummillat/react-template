import React from "react";

interface OfflineMessageProps {
  onRetry: () => void;
}

const OfflineMessage: React.FC<OfflineMessageProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-red-100">
      <div className="p-6 text-center">
        <h1 className="text-4xl font-semibold text-red-600 mb-2">
          You're offline.
        </h1>
        <p className="text-gray-600 mb-2">
          Connect to the internet to continue.
        </p>
        <p className="text-gray-600 mb-6">
          Check your connection and try again.
        </p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default OfflineMessage;
