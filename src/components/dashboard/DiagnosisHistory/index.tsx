import type React from "react"
import { FaLungs, FaThermometerHalf } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import { BloodPressureChart } from "@/components/dashboard/BloodPressureChart"
import type { DiagnosisHistoryEntry } from "@/types"

interface DiagnosisHistoryProps {
  diagnosisHistory?: DiagnosisHistoryEntry
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ diagnosisHistory }) => {
  if (!diagnosisHistory) return null

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-[#072635] mb-6">Diagnosis History</h2>

      {/* Blood Pressure Chart */}
      <div className="h-64 bg-gray-50 rounded-xl mb-6">
        <BloodPressureChart
          data={{
            dates: [diagnosisHistory.month],
            systolic: [diagnosisHistory.blood_pressure.systolic.value],
            diastolic: [diagnosisHistory.blood_pressure.diastolic.value],
          }}
        />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EBF9FF] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <FaLungs className="text-blue-500" size={24} />
            <span className="text-sm text-gray-600">{diagnosisHistory.respiratory_rate.levels}</span>
          </div>
          <h3 className="text-sm text-gray-600">Respiratory Rate</h3>
          <p className="text-2xl font-bold">{diagnosisHistory.respiratory_rate.value} bpm</p>
        </div>

        <div className="bg-[#FFF5F5] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <FaThermometerHalf className="text-red-500" size={24} />
            <span className="text-sm text-gray-600">{diagnosisHistory.temperature.levels}</span>
          </div>
          <h3 className="text-sm text-gray-600">Temperature</h3>
          <p className="text-2xl font-bold">{diagnosisHistory.temperature.value}°F</p>
        </div>

        <div className="bg-[#FFF5F5] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <AiOutlineHeart className="text-red-500" size={24} />
            <span className="text-sm text-gray-600">{diagnosisHistory.heart_rate.levels}</span>
          </div>
          <h3 className="text-sm text-gray-600">Heart Rate</h3>
          <p className="text-2xl font-bold">{diagnosisHistory.heart_rate.value} bpm</p>
        </div>
      </div>
    </div>
  )
}

