import { Language } from "../../../../enums/Language.ts";

export interface Partner {
  id: number;
  logo: string;
  url: string;
  translations: Record<Language, LanguageInterface>;
}

export interface LanguageInterface {
  organization: string;
}

export interface PartnersResponse {
  data: Partner[];
  pagination: object;
}
