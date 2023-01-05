import React from "react";

export interface iContextChildrenProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  login: (data: iUserLogin) => Promise<void>;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserProviderValue {
  registerUser: (data: iUserRegister) => Promise<void>;
}

export interface iUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  elo: string;
  route: string;
}
