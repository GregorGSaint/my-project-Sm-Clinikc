import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import { AnalysisPage } from "./pages/AnalysisPage";
import { ViewerPage } from "./pages/ViewerPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/studies" element={<StudiesPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/viewer" element={<ViewerPage />} />
    </Routes>
  );
}

