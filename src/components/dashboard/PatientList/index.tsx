import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { Patient } from "@/types";
import type React from "react";

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
}

export const PatientList: React.FC<PatientListProps> = ({
  patients,
  onSelectPatient,
}) => {
  return (
    <div className="w-full lg:w-72 bg-white rounded-2xl p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#072635]">Patients</h2>
        <div className="relative">
          <BiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl cursor-pointer"
            onClick={() => onSelectPatient(patient)}
          >
            <div className="flex items-center gap-3">
              <Image
                src={patient.imageUrl || "/placeholder.svg"}
                alt={patient.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{patient.name}</h3>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <BsThreeDotsVertical className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};
