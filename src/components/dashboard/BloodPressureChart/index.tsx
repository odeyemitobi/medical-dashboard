import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import type { DiagnosisHistoryEntry } from "@/types";

interface BloodPressureChartProps {
  data?: DiagnosisHistoryEntry;
  className?: string;
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  data,
  className = "",
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [timeRange, setTimeRange] = useState<string>("Last 6 months");

  useEffect(() => {
    if (!chartRef.current || !data) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [`${data.month}, ${data.year}`],
        datasets: [
          {
            label: "Systolic",
            data: [data.blood_pressure.systolic.value],
            borderColor: "#FF69B4",
            backgroundColor: "rgba(255, 105, 180, 0.1)",
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#FF69B4",
          },
          {
            label: "Diastolic",
            data: [data.blood_pressure.diastolic.value],
            borderColor: "#4169E1",
            backgroundColor: "rgba(65, 105, 225, 0.1)",
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#4169E1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#072635",
            bodyColor: "#072635",
            borderColor: "#e2e8f0",
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#666",
              font: {
                size: 12,
              },
            },
          },
          y: {
            beginAtZero: false,
            min: 60,
            max: 180,
            grid: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#666",
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (!data) return null;

  return (
    <div className={`bg-[#F8F2FF] flex gap-5 rounded-2xl p-6 ${className}`}>
      <div className="mb-4 w-[70%]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-[#072635]">Blood Pressure</h2>
          <select
            title="time-range"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-transparent border-none text-sm text-gray-600 focus:outline-none cursor-pointer"
          >
            <option value="Last 6 months">Last 6 months</option>
            <option value="Last 3 months">Last 3 months</option>
            <option value="Last month">Last month</option>
          </select>
        </div>
        <div className="h-64 w-full mt-5">
          <canvas ref={chartRef} />
        </div>
      </div>

      <div className="p-0 w-[30%]">
        <div className="space-y-8 gap-8 mt-2">
          <div className="border-b pb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF69B4]" />
              <span className="text-sm text-gray-600">Systolic</span>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-[#072635]">
                {data.blood_pressure.systolic.value}
              </span>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs">
                  {data.blood_pressure.systolic.levels === "Higher than Average"
                    ? "▲"
                    : "▼"}
                </span>
                <span className="text-xs text-gray-600">
                  {data.blood_pressure.systolic.levels}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4169E1]" />
              <span className="text-sm text-gray-600">Diastolic</span>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-[#072635]">
                {data.blood_pressure.diastolic.value}
              </span>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs">
                  {data.blood_pressure.diastolic.levels ===
                  "Higher than Average"
                    ? "▲"
                    : "▼"}
                </span>
                <span className="text-xs text-gray-600">
                  {data.blood_pressure.diastolic.levels}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
