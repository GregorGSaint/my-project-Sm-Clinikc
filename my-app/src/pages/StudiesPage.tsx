
import { useQuery } from "@tanstack/react-query";
import { fetchStudies } from "../api/studies";
import type { Study } from "../types/study";

export default function StudiesPage() {
  const { data, isLoading, error } = useQuery<Study[]>({
    queryKey: ["studies"],
    queryFn: fetchStudies,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке данных</p>;

  return (
    <div>
      <h1>Список исследований</h1>
      <ul>
        {data?.map((study) => (
          <li key={study.id}>
            {study.patientName} — {study.modality} ({study.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
