import { createContext, useEffect, useState } from "react";
import {
  iContextChildrenProps,
  iPlayers,
  iUserProviderValue,
} from "./interfaces";
import { api } from "services/api";
import { iUserLogin } from "./interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UserContext = createContext({} as iUserProviderValue);

export function UserProvider({ children }: iContextChildrenProps) {
  const navigate = useNavigate();

  const [players, setPlayers] = useState<iPlayers[]>([]);
  const [user, setUser] = useState<iPlayers | undefined>();

  async function loadUser() {
    const token = localStorage.getItem("@league-of-match: token");
    const id = localStorage.getItem("@league-of-match: id");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/${id}`);
        setUser(data);
      } catch (error) {
        console.log(error);
        window.localStorage.clear();
      }
    }
  }

  async function login(data: iUserLogin) {
    try {
      const request = await api.post("/login", data);

      localStorage.setItem("@league-of-match: token", request.data.accessToken);
      localStorage.setItem("@league-of-match: id", request.data.user.id);

      setUser(request.data.user);

      toast.success("Logado com sucesso");

      setUser(request.data.accessToken)
      navigate("/players");
    } catch (err) {
      toast.error("Email ou senha incorretos");
      console.log(err);
    }
  }

  async function getAllPlayers() {
    try {
      const token = localStorage.getItem("@league-of-match: token");
      if (token) {
        const response = await api.get("/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setPlayers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPlayers();
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ login, players, user, setUser, loadUser, getAllPlayers }}>
      {children}
    </UserContext.Provider>
  );
}
