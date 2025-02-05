import type React from "react"

export interface Patient {
  name: string
  gender: string
  age: number
  profile_picture: string
  date_of_birth: string
  phone_number: string
  emergency_contact: string
  insurance_type: string
  diagnosis_history: DiagnosisHistoryEntry[]
  diagnostic_list: DiagnosticEntry[]
  lab_results: string[]
}

export interface DiagnosisHistoryEntry {
  month: string
  year: number
  blood_pressure: {
    systolic: {
      value: number
      levels: string
    }
    diastolic: {
      value: number
      levels: string
    }
  }
  heart_rate: {
    value: number
    levels: string
  }
  respiratory_rate: {
    value: number
    levels: string
  }
  temperature: {
    value: number
    levels: string
  }
}

interface DiagnosticEntry {
  name: string
  description: string
  status: string
}

export interface VitalSigns {
  bloodPressure: {
    systolic: {
      value: number
      levels: string
    }
    diastolic: {
      value: number
      levels: string
    }
  }
  respiratoryRate: {
    value: number
    levels: string
  }
  temperature: {
    value: number
    levels: string
  }
  heartRate: {
    value: number
    levels: string
  }
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

