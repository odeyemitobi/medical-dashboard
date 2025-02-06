import type React from "react";
import { FiDownload } from "react-icons/fi";

interface LabResultsProps {
  labResults: string[];
}

export const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Lab Results</h2>
      <div className="space-y-4 overflow-y-auto lg:h-[calc(100vh-53rem)] h-[calc(100vh-48rem)]">
        {labResults.map((test) => (
          <div key={test} className="flex items-center justify-between">
            <span className="text-sm font-semibold">{test}</span>
            <button title="download icon" className="p-2 hover:bg-gray-100 rounded-full">
              <FiDownload size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
