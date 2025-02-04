export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  image: string;
  dob: string;
  contact: string;
  insurance: string;
  bloodPressure: BloodPressureData[];
  vitals: VitalsData;
  diagnoses: Diagnosis[];
}

export interface PatientsListProps {
  patients: Patient[];
  selectedPatientId: string;
}

export interface BloodPressureData {
  date: string;
  systolic: number;
  diastolic: number;
}

export interface VitalsData {
  respiratoryRate: number;
  temperature: number;
  heartRate: number;
}

export interface Diagnosis {
  problem: string;
  description: string;
  status: "Active" | "Inactive" | "Under Observation" | "Cured";
}
