import type { Study } from "../types/study";

const mockStudies: Study[] = [
  { id: "1", patientName: "Иванов И.И.", modality: "CT", date: "2025-09-20" },
  { id: "2", patientName: "Петров П.П.", modality: "MRI", date: "2025-09-22" },
];

export function fetchStudies(): Promise<Study[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockStudies), 800); // имитация задержки
  });
}
