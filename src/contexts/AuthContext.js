import { createContext, useState } from "react";
import { loginUser } from "../services/api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
          setToken(storedToken);
        }
    }, []);
    const login = async (username, password) => {
        try {
          const response = await loginUser(username, password);
          const userToken = response.token;
          
          localStorage.setItem('authToken', userToken);
          setToken(userToken);
        } catch (error) {
          console.error("Failed to log in", error);
          throw error;
        }
      };


  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
