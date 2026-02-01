"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User, LoginResponse } from "@/app/lib/types";
import { get, post } from "@/app/lib/api";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user on mount
  useEffect(() => {
    async function loadUser() {
      const token = Cookies.get("token");
      if (token) {
        try {
          // Assume GET /me returns the user
          // Based on plan: GET /me returns { data: user }
          // Use generic get which extracts data
          const userData = await get<User>("/me");
          setUser(userData);
        } catch (error) {
          console.error("Failed to load user", error);
          Cookies.remove("token");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const login = async (credentials: any) => {
    try {
      // POST /user/login -> { data: { token, user } }
      const res = await post<{ token: string; user: User }>("/user/login", credentials);
      Cookies.set("token", res.token, { expires: 365 });
      setUser(res.user);
      router.push("/");
      router.refresh(); 
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: any) => {
    try {
      // POST /user/registry -> { data: { token, user } }
      const res = await post<{ token: string; user: User }>("/user/registry", data);
      Cookies.set("token", res.token, { expires: 365 });
      setUser(res.user);
      router.push("/");
      router.refresh();
    } catch (error) {
       throw error;
    }
  };

  const logout = async () => {
    try {
      await post("/user/logout");
    } catch (e) {
      console.warn("Logout API failed", e);
    } finally {
      Cookies.remove("token");
      setUser(null);
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
