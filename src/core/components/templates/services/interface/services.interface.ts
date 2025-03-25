import { Language } from "../../../../enums/Language.ts";

export interface ServicesTranslation {
  title: string;
  description: string;
}

export interface ServicesResponseInterface {
  data: ServicesInterface[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface OrderSchemaField {
  name: string;
  type: "number" | "string";
  required: boolean;
}

export interface ServicesInterface {
  id: number;
  title: string;
  description: string;
  translations: Record<Language, ServicesTranslation>;
  slug: string;
  price?: number;
  logo: string;
  tags: string[];
  documents: string[];
  contactInfo: string;
  createdAt: string;
  updatedAt: string;
  orderSchemaFields: OrderSchemaField[];
  orderSchema?: {
    fields: OrderSchemaField[];
  };
}
