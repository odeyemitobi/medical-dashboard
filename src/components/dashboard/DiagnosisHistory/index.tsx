import type React from "react";
import { BloodPressureChart } from "@/components/dashboard/BloodPressureChart";
import type { DiagnosisHistoryEntry } from "@/types";
import Image from "next/image";

interface MetricCardProps {
  bgColor: string;
  icon: string;
  title: string;
  value: number | string;
  unit: string;
  levels: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  bgColor,
  icon,
  title,
  value,
  unit,
  levels,
}) => (
  <div className={`${bgColor} rounded-2xl p-4`}>
    <div className="mb-3">
      <Image src={icon} alt={title} width={100} height={100} />
    </div>
    <h3 className="text-sm">{title}</h3>
    <p className="text-4xl font-bold">
      {value} {unit}
    </p>
    <div className="text-sm mt-4">{levels}</div>
  </div>
);

interface DiagnosisHistoryProps {
  diagnosisHistory?: DiagnosisHistoryEntry;
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({
  diagnosisHistory,
}) => {
  if (!diagnosisHistory) return null;

  const metrics = [
    {
      bgColor: "bg-[#E0F3FA]",
      icon: "/lungs.svg",
      title: "Respiratory Rate",
      value: diagnosisHistory.respiratory_rate.value,
      unit: "bpm",
      levels: diagnosisHistory.respiratory_rate.levels,
    },
    {
      bgColor: "bg-[#FFE6E9]",
      icon: "/heart.svg",
      title: "Heart Rate",
      value: diagnosisHistory.heart_rate.value,
      unit: "bpm",
      levels: diagnosisHistory.heart_rate.levels,
    },
    {
      bgColor: "bg-[#FFE6F1]",
      icon: "/temp.svg",
      title: "Temperature",
      value: diagnosisHistory.temperature.value,
      unit: "°F",
      levels: diagnosisHistory.temperature.levels,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-[#072635] mb-6">
        Diagnosis History
      </h2>

      <div className="h-64 bg-gray-50 rounded-xl mb-6">
        <BloodPressureChart
          data={{
            dates: [diagnosisHistory.month],
            systolic: [diagnosisHistory.blood_pressure.systolic.value],
            diastolic: [diagnosisHistory.blood_pressure.diastolic.value],
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#072635]">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
};