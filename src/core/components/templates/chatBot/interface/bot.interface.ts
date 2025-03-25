export interface MessageItem {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  chatId: number;
}

export interface ChatItem {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  messages: MessageItem[];
}

export interface MessageRes {
  id: number;
  question: string;
  answer: string;
}
