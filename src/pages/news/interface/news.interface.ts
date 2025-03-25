export interface NewsTranslation {
  title: string;
  content: string;
}

export interface NewsCategory {
  id: number;
  createdAt: string;
  updatedAt: string;
  translations: Record<string, { title: string }>;
}

export interface NewsItem {
  id: number;
  image: string;
  createdAt: string;
  slug: string;
  status: string;
  tags: string[];
  updatedAt: string;
  video: string | null;
  categoryId: number;
  viewedBy: string[];
  views: number;
  newsCategory: NewsCategory;
  translations: Record<string, NewsTranslation>;
}

export interface NewsResponse {
  data: NewsItem[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
