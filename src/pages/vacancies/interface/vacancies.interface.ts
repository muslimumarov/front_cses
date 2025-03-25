import { Language } from "../../../core/enums/Language.ts";

export interface VacancyTranslation {
  title: string;
  location: string;
  requirements: string;
  workConditions: string;
  responsibilities: string;
}

export interface Vacancy {
  id: number;
  salary: string;
  slug: string;
  status: string;
  employmentType: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
  translations: Record<Language, VacancyTranslation>;
}

export interface VacancyResponse {
  data: Vacancy[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
