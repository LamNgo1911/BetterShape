// User
export interface UserInput {
  name: string;
  email: string;
}

export interface UserUpdateInput {
  name: string;
}

// Product
export interface ProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface ProductUpdateInput {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

// Program Video
export interface VideoInput {
  program_id: string;
  title: string;
  description: string;
  url: string;
}

export interface VideoUpdateInput {
  program_id: string;
  title: string;
  description: string;
  url: string;
}

// Program Progress
export interface ProgressInput {
  userId: string;
  progress: string;
  program_id: string;
}

export interface ProgressUpdateInput {
  userId: string;
  progress: string;
  program_id: string;
}

// Program
export interface ProgramInput {
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProgramUpdateInput {
  name: string;
  description: string;
  image: string;
  price: number;
}

// Order
export interface OrderInput {
  userId: string;
  productId: string;
  orderDate: string;
  total: number;
}

export interface OrderUpdateInput {
  userId: string;
  productId: string;
  orderDate: string;
  total: number;
}

// Transaction
export interface TransactionInput {
  orderId: string;
  userId: string;
  amount: number;
  transactionDate: Date;
}

export interface TransactionUpdateInput {
  orderId: string;
  userId: string;
  amount: number;
}

// Notification
export interface NotificationInput {
  userId: string;
  notificationText: string;
  createAt: Date;
}

export interface NotificationUpdateInput {
  userId: string;
  notificationText: string;
}

// Message
export interface MessageInput {
  senderId: string;
  receiverId: string;
  messageText: string;
  sentAt: string;
}

export interface MessageUpdateInput {
  senderId: string;
  receiverId: string;
  messageText: string;
}

// Session history
export interface SessionHistoryInput {
  sessionId: string;
  notes: string;
}

export interface SessionHistoryUpdateInput {
  sessionId: string;
  notes: string;
}
