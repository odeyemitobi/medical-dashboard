import Image from "next/image";
import type React from "react";
import type { Patient } from "@/types";

interface PatientDetailsProps {
  patient: Patient | null;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={patient.imageUrl || "/placeholder.svg"}
          alt={patient.name}
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">{patient.name}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Date Of Birth</p>
          <p className="font-semibold">August 23, 1996</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Gender</p>
          <p className="font-semibold">{patient.gender}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Contact Info.</p>
          <p className="font-semibold">(415) 555-1234</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Emergency Contacts</p>
          <p className="font-semibold">(415) 555-5678</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Insurance Provider</p>
          <p className="font-semibold">Sunrise Health Assurance</p>
        </div>
      </div>

      <button className="w-full bg-[#00FFC2] text-[#072635] font-semibold py-2 rounded-full mt-6">
        Show All Information
      </button>
    </div>
  );
};
