import type React from "react"

export interface Patient {
  id: string
  name: string
  age: number
  gender: string
  imageUrl: string
}

export interface VitalSigns {
  bloodPressure: {
    systolic: number[]
    diastolic: number[]
    dates: string[]
  }
  respiratoryRate: number
  temperature: number
  heartRate: number
}

export interface Diagnosis {
  condition: string
  description: string
  status: string
}

export interface BloodPressureData {
  dates: string[]
  systolic: number[]
  diastolic: number[]
}

export interface NavbarProps {
  className?: string
}

export interface LayoutProps {
  children: React.ReactNode
}
