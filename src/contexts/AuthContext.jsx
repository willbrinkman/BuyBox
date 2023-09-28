import { createContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const login = async (username, password) => {
    try {
      const response = await loginUser(username, password);
      const userToken = response.token;

      sessionStorage.setItem("authToken", userToken);
      setToken(userToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to log in", error);
      throw error;
    }
  };
  const logout = () => {
    sessionStorage.removeItem("authToken");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
