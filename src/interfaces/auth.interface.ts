export interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  age: number;
  phone: string;
  profileImg?: string;
  profileImgId?: string;
  createdAt: Date;
  updatedAt: Date;
  country: string;
}

export interface IRegisterUser extends IUser {}

export interface ILoginUser {
  identifier: string;
  password: string;
}
