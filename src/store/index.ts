// ===== 202f Academy — Store barrel =====
export * from './progressStore';

// Compatibility layer for legacy imports
import { useProgressStore } from './progressStore';

export const useStore = useProgressStore;

export const actions = {
  addXp: (amount: number, reason?: string) => useProgressStore.getState().addXp(amount, reason),
  markKnown: (id: string, value?: boolean) => useProgressStore.getState().markKnown(id, value),
  completeLesson: (id: string) => useProgressStore.getState().completeLesson(id),
  toggleChecklistItem: (stepId: string, index: number) => useProgressStore.getState().toggleChecklistItem(stepId, index),
  recordTestResult: (testId: string, score: number, passingScore: number, weakCategories?: string[]) => useProgressStore.getState().recordTestResult(testId, score, passingScore, weakCategories),
  recordCategoryAnswers: (answers: any[]) => useProgressStore.getState().recordCategoryAnswers(answers),
  dayOpened: () => useProgressStore.getState().dayOpened(),
  readLesson: (id: string) => useProgressStore.getState().readLesson(id),
  completeModule: (id: string) => useProgressStore.getState().completeModule(id),
  recordQuiz: (scorePct: number) => useProgressStore.getState().recordQuiz(scorePct),
  recordBlitz: (correct: number) => useProgressStore.getState().recordBlitz(correct),
  recordExam: (id: string, known: boolean) => useProgressStore.getState().recordExam(id, known),
  recordCase: (id: string, score: number) => useProgressStore.getState().recordCase(id, score),
  completeChecklist: (id: string) => useProgressStore.getState().completeChecklist(id),
  recordRush: (served: number) => useProgressStore.getState().recordRush(served),
  bumpQuest: (metric: any, amount: number) => useProgressStore.getState().bumpQuest(metric, amount),
  checkBadges: () => useProgressStore.getState().checkBadges(),
  syncNow: () => useProgressStore.getState().syncNow(),
  claimCode: (code: string) => useProgressStore.getState().claimCode(code),
  resetAll: () => useProgressStore.getState().resetAll(),
  resetProgress: () => useProgressStore.getState().resetProgress(),
};
