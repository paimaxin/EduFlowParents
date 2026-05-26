export type PageType = 'login' | 'bind-child' | 'home' | 'analytics' | 'messages' | 'profile' | 'exam-results' | 'tutoring-records' | 'homework-details' | 'recitation-details' | 'edit-profile' | 'notifications' | 'student-details' | 'about' | 'chat' | 'announcements' | 'weekly-reports' | 'group-scores';

export interface UserContext {
  name: string;
  id: string;
  role: string;
}
