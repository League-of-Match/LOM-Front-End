import React from "react";

export interface iContextChildrenProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  login: (data: iUserLogin) => Promise<void>;
  registerUser: (data: iUserRegister) => Promise<void>;
  players: iPlayers[];
  user: iPlayers;
  loadUser: () => void;
  getAllPlayers: () => void;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iPlayers {
  email: string;
  nickname: string;
  elo: string;
  route: string;
  id: number;
  main?: {
    name: string;
    card: string;
  };
  bio?: string;
  profileIcon?: string;
  discord?: string;
}

export interface iUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  elo: string;
  route: string;
}
