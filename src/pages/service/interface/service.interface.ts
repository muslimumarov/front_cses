export interface ServiceTranslation {
  title: string;
  description: string;
}

export interface OrderSchema {
  fields: OrderSchemaItem[];
}

export interface OrderSchemaItem {
  name: string;
  type: string;
  required: boolean;
}

export interface ServiceItem {
  id: number;
  createdAt: string;
  updatedAt: string;
  documents: string[];
  contactInfo: string;
  logo: string;
  price: number;
  slug: string;
  status: string;
  tags: string[];
  orderSchemaId: number;
  translations: Record<string, ServiceTranslation>;
  orderSchema: OrderSchema;
}

export interface ServiceResponse {
  data: ServiceItem[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
