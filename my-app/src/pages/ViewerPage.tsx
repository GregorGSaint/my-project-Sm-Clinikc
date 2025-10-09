import { useStudyStore } from "../store/useStudyStore";
import { Typography, Box, Paper } from "@mui/material";

export function ViewerPage() {
  const { selectedStudy } = useStudyStore();

  if (!selectedStudy) {
    return <Typography>Выберите исследование на странице "Studies"</Typography>;
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Просмотр исследования
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>
          <strong>Пациент:</strong> {selectedStudy.patientName}
        </Typography>
        <Typography>
          <strong>Тип:</strong> {selectedStudy.modality}
        </Typography>
        <Typography>
          <strong>Дата:</strong> {selectedStudy.date}
        </Typography>
      </Box>
    </Paper>
  );
}

