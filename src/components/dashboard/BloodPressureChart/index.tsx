"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import type { BloodPressureData } from "@/types";
import type React from "react"; // Added import for React

interface BloodPressureChartProps {
  data: BloodPressureData;
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  data,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.dates,
        datasets: [
          {
            label: "Systolic",
            data: data.systolic,
            borderColor: "#FF69B4",
            backgroundColor: "rgba(255, 105, 180, 0.1)",
            tension: 0.4,
          },
          {
            label: "Diastolic",
            data: data.diastolic,
            borderColor: "#4169E1",
            backgroundColor: "rgba(65, 105, 225, 0.1)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 180,
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

  return (
    <div className="h-64">
      <canvas ref={chartRef} />
    </div>
  );
};
