"use client"

import { useState, useEffect } from "react"
import { PatientList } from "@/components/dashboard/PatientList"
import { DiagnosisHistory } from "@/components/dashboard/DiagnosisHistory"
import { DiagnosticList } from "@/components/dashboard/DiagnosticList"
import { PatientDetails } from "@/components/dashboard/PatientDetails"
import { LabResults } from "@/components/dashboard/LabResults"
import type { Patient, VitalSigns, Diagnosis } from "@/types"

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [vitalSigns, setVitalSigns] = useState<VitalSigns | null>(null)
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: "Bearer YOUR_AUTH_TOKEN",
          },
        })
        const data = await response.json()
        // Handle the data accordingly
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // For demo purposes, using static data
  const mockPatients = [
    {
      id: "1",
      name: "Jessica Taylor",
      age: 28,
      gender: "Female",
      imageUrl:
        "/snr-doc.png",
    },
    // Add more mock patients...
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <PatientList patients={mockPatients} onSelectPatient={setSelectedPatient} />
      <div className="flex-1 space-y-6">
        <DiagnosisHistory vitalSigns={vitalSigns} />
        <DiagnosticList diagnoses={diagnoses} />
      </div>
      <div className="w-full lg:w-80">
        <div className="space-y-6">
          <PatientDetails patient={selectedPatient} />
          <LabResults />
        </div>
      </div>
    </div>
  )
}

