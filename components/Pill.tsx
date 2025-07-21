// Pill component

import React from "react";

interface PillProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isSelected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition ${isSelected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );
};

export default Pill;
