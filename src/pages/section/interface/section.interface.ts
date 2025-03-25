export interface StaffTranslation {
  fullname: string;
  tasks: string;
  acceptance: string;
}

export interface Department {
  translations: Record<string, { title: string }>;
}

export interface Section {
  translations: Record<string, { title: string }>;
}

export interface Position {
  translations: Record<string, { title: string }>;
}

export interface StaffMember {
  id: number;
  avatar: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  departmentId: number | null;
  positionId: number;
  sectionId: number | null;
  translations: Record<string, StaffTranslation>;
  department: Department | null;
  section: Section | null;
  position: Position | null;
}

export interface SectionResponse {
  data: StaffMember[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
