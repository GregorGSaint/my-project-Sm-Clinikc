import { create } from "zustand";
import type { Study } from "../types/study";

interface StudyState {
  selectedStudy: Study | null;
  setSelectedStudy: (study: Study) => void;
  clearSelection: () => void;
}

export const useStudyStore = create<StudyState>((set) => ({
  selectedStudy: null,
  setSelectedStudy: (study) => set({ selectedStudy: study }),
  clearSelection: () => set({ selectedStudy: null }),
}));