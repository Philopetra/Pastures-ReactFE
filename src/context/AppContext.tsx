import React, { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of the context's value
interface AppContextProps {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
}

// Provide a default value for the context
export const AppContext = createContext<AppContextProps>({
  accessToken: "",
  setAccessToken: () => {},
});

// Define the shape of the provider's props
interface AppContextProviderProps {
  children: ReactNode;
}

const initialAccessToken: string = "";

// Create the AppContextProvider component
export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>(() => {
    const localData = localStorage.getItem("accessToken");
    return localData ? localData : initialAccessToken;
  });

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};