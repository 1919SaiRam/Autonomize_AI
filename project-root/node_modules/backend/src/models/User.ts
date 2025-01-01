// models/User.ts

export interface User {
  username: string;
  name?: string;
  email?: string;  // Made email optional
  id?: number;
  location?: string;
  bio?: string;
  blog?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  created_at?: string;
}
