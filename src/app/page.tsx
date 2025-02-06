"use client";

import { useState, useEffect } from "react";
import { PatientList } from "@/components/dashboard/PatientList";
import { DiagnosisHistory } from "@/components/dashboard/DiagnosisHistory";
import { DiagnosticList } from "@/components/dashboard/DiagnosticList";
import { PatientDetails } from "@/components/dashboard/PatientDetails";
import { LabResults } from "@/components/dashboard/LabResults";
import { fetchPatients } from "@/lib/api";
import type { Patient } from "@/types";

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
        setLoading(false);
      } catch {
        setError("Failed to load patients");
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <PatientList
        patients={patients}
        onSelectPatient={setSelectedPatient}
        selectedPatient={selectedPatient}
        loading={loading}
        error={error}
      />
      <div className="flex-1 space-y-6 lg:overflow-y-auto lg:h-[calc(100vh-9rem)]">
        <DiagnosisHistory
          diagnosisHistory={selectedPatient?.diagnosis_history?.[0]}
        />
        <DiagnosticList diagnostics={selectedPatient?.diagnostic_list || []} />
      </div>
      <div className="w-full lg:w-80">
        <div className="space-y-6 mb-6 lg:mb-0">
          <PatientDetails patient={selectedPatient} />
          <LabResults labResults={selectedPatient?.lab_results || []} />
        </div>
      </div>
    </div>
  );
}
