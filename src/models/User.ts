export interface User {
  name: string;
  agency: string;
  account: string;
  avatar: string;
}

export interface UserAuth {
  user: User;
  token: string;
}
