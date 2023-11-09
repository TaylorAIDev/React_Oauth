export type Nullable<T> = T | null;

export type STATE = {
  auth: ISTATE;
};

export type ISTATE = {
  isAuthenticated: boolean;
  user: Nullable<User>;
};

export type User = {
  email: string;
  avatar: string;
  name: string;
  expAt: number;
};
