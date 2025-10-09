import { useQuery } from "@tanstack/react-query";
import { fetchStudies } from "../api/studies";
import type { Study } from "../types/study";
import { useStudyStore } from "../store/useStudyStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StudiesPage() {
  const navigate = useNavigate();
  const { setSelectedStudy } = useStudyStore();

  const { data, isLoading, error } = useQuery<Study[]>({
    queryKey: ["studies"],
    queryFn: fetchStudies,
  });

  if (isLoading)
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <CircularProgress />
      </div>
    );

  if (error) return <p>Ошибка при загрузке данных</p>;

  const handleSelect = (study: Study) => {
    setSelectedStudy(study);
    navigate("/viewer");
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ p: 2 }}>
        Список исследований
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Пациент</TableCell>
            <TableCell>Тип исследования</TableCell>
            <TableCell>Дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((study) => (
            <TableRow
              key={study.id}
              hover
              onClick={() => handleSelect(study)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{study.patientName}</TableCell>
              <TableCell>{study.modality}</TableCell>
              <TableCell>{study.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

