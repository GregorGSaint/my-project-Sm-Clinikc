import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import { AnalysisPage } from "./pages/AnalysisPage";
import { ViewerPage } from "./pages/ViewerPage";

export function AppRouter() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />

       
        <Route path="studies" element={<StudiesPage />} />
        <Route path="analysis" element={<AnalysisPage />} />
        <Route path="viewer" element={<ViewerPage />} />
      </Route>
    </Routes>
  );
}


