export interface PartnerTranslation {
  organization: string;
}

export interface Partner {
  id: number;
  logo: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  translations: {
    uz: PartnerTranslation;
    [key: string]: PartnerTranslation;
  };
}

export interface PartnerResponse {
  data: Partner[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
