import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

interface AppContextType {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState(() => {
    const localData = localStorage.getItem('accessToken');
    return localData ? localData : '';
  });

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
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
