import React, { useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { Patient } from "@/types";

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  selectedPatient: Patient | null;
  loading: boolean;
  error: string | null;
}

export const PatientList: React.FC<PatientListProps> = ({
  patients,
  onSelectPatient,
  selectedPatient,
  loading,
  error,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:w-72 bg-white rounded-2xl p-4 flex flex-col lg:h-[calc(100vh-9rem)] h-[calc(100vh-33rem)]">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#072635] mb-4">Patients</h2>
        <div className="relative">
          <BiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading patients...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredPatients.length === 0 ? (
          <p className="text-center text-gray-500">
            {searchQuery ? "No matching patients found" : "No patients currently"}
          </p>
        ) : (
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div
                key={patient.name}
                className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors ${
                  selectedPatient?.name === patient.name
                    ? "bg-[#D8FCF7]"
                    : ""
                }`}
                onClick={() => onSelectPatient(patient)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={patient.profile_picture || "/placeholder.svg"}
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
        )}
      </div>
    </div>
  );
};