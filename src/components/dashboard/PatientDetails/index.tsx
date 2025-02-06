import React from "react";
import Image from "next/image";
import { PiCalendarBlank, PiGenderIntersex, PiPhone, PiFirstAid, PiShieldStar } from "react-icons/pi";
import type { Patient } from "@/types";

interface PatientDetailsProps {
  patient: Patient | null;
}

// InfoItem component to reduce repetition
const InfoItem = ({ icon: Icon, label, value }: { 
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="bg-[#F6F7F8] p-2 rounded-full">
      <Icon size={22} />
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  if (!patient) return null;

  const patientInfo = [
    { icon: PiCalendarBlank, label: "Date Of Birth", value: patient.date_of_birth },
    { icon: PiGenderIntersex, label: "Gender", value: patient.gender },
    { icon: PiPhone, label: "Contact Info.", value: patient.phone_number },
    { icon: PiFirstAid, label: "Emergency Contacts", value: patient.emergency_contact },
    { icon: PiShieldStar, label: "Insurance Provider", value: patient.insurance_type },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={patient.profile_picture || "/placeholder.svg"}
          alt={patient.name}
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">{patient.name}</h2>
      </div>

      <div className="space-y-4">
        {patientInfo.map((info) => (
          <InfoItem 
            key={info.label}
            icon={info.icon}
            label={info.label}
            value={info.value}
          />
        ))}
      </div>

      <button className="w-full bg-[#00FFC2] text-[#072635] font-semibold py-2 rounded-full mt-6">
        Show All Information
      </button>
    </div>
  );
};