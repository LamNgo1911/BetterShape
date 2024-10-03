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

// Program
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
