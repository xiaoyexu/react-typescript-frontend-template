interface IEntity {
  id: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

interface ILogin {
  username: string;
  password: string;
}

interface IUser {
  username: string;
  displayName: string;
  role: string;
}

interface TokenPayload {
  username: string;
  displayName: string;
  role: string;
}

export type { IEntity, IUser, ILogin, TokenPayload };
