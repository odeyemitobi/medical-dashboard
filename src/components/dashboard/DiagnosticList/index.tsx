import type { Patient } from "@/types"
import type React from "react"

interface DiagnosticListProps {
  diagnostics: Patient["diagnostic_list"]
}

export const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnostics = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-[#072635] mb-6">Diagnostic List</h2>
      <div className="overflow-x-auto overflow-y-auto lg:h-[calc(100vh-47.7rem)] h-[calc(100vh-45rem)]">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="pb-4">Problem/Diagnosis</th>
              <th className="pb-4">Description</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {diagnostics?.map((diagnosis, index) => (
              <tr key={`${diagnosis.name}-${index}`}>
                <td className="py-3">{diagnosis.name}</td>
                <td className="py-3">{diagnosis.description}</td>
                <td className="py-3">
                  <span className={`px-3 py-1 rounded-full ${getStatusColor(diagnosis.status)}`}>
                    {diagnosis.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "under observation":
      return "bg-yellow-100 text-yellow-800"
    case "cured":
      return "bg-green-100 text-green-800"
    case "inactive":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-blue-100 text-blue-800"
  }
}

