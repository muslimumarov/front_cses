import { Language } from "../../../core/enums/Language.ts";

export interface Translations {
  language: string;
  text: string;
  description: string;
}

export interface RecommendationItem {
  id: number;
  category: string;
  image: string;
  readMoreLink: string;
  slug: string;
  status: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  translations: Record<Language, Translations>;
}

export interface RecommendationResponse {
  data: RecommendationItem[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
