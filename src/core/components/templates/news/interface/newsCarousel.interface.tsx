import { Language } from "../../../../enums/Language.ts";

export interface CategoryInterface {
  translations: Record<Language, { title: string }>;
}

export interface LanguageInterface {
  title: string;
  content: string;
  language: Language;
}

export interface NewsCarouselInterface {
  id: number;
  image: string;
  newsCategory: CategoryInterface;
  categoryId: number;
  createdAt: string;
  translations: Record<Language, LanguageInterface>;
  tags?: string[];
  updatedAt: string;
  video?: string;
}
