export interface DocumentTranslation {
  title: string;
  description: string;
}

export interface DocumentItem {
  type: string;
  id: number;
  category: string;
  size: string;
  documentUrl: string;
  downloadCount: number;
  files: string[];
  slug: string;
  status: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  translations: Record<string, DocumentTranslation>;
}

export interface DocumentResponse {
  data: DocumentItem[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
