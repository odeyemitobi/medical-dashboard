import type React from "react"
import { FaLungs, FaThermometerHalf } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import { BloodPressureChart } from "@/components/dashboard/BloodPressureChart"
import type { VitalSigns } from "@/types"

interface DiagnosisHistoryProps {
  vitalSigns: VitalSigns | null
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ vitalSigns }) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-[#072635] mb-6">Diagnosis History</h2>

      {/* Blood Pressure Chart */}
      <div className="h-64 bg-gray-50 rounded-xl mb-6">
        <BloodPressureChart
          data={{
            dates: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
            systolic: [120, 125, 145, 115, 135, 140],
            diastolic: [80, 70, 85, 75, 75, 80],
          }}
        />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EBF9FF] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <FaLungs className="text-blue-500" size={24} />
            <span className="text-sm text-gray-600">Normal</span>
          </div>
          <h3 className="text-sm text-gray-600">Respiratory Rate</h3>
          <p className="text-2xl font-bold">20 bpm</p>
        </div>

        <div className="bg-[#FFF5F5] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <FaThermometerHalf className="text-red-500" size={24} />
            <span className="text-sm text-gray-600">Normal</span>
          </div>
          <h3 className="text-sm text-gray-600">Temperature</h3>
          <p className="text-2xl font-bold">98.6°F</p>
        </div>

        <div className="bg-[#FFF5F5] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <AiOutlineHeart className="text-red-500" size={24} />
            <span className="text-sm text-gray-600">Lower than Average</span>
          </div>
          <h3 className="text-sm text-gray-600">Heart Rate</h3>
          <p className="text-2xl font-bold">78 bpm</p>
        </div>
      </div>
    </div>
  )
}

