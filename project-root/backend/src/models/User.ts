// Example: Modify the User interface
export interface User {
    username: string;
    id?: number; // Allow id to be optional
    location?: string;
    bio?: string;
    blog?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    created_at?: string;
  }
  