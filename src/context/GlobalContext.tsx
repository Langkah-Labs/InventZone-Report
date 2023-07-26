import React, { useState, createContext } from "react";

//Interface for GlobalContext
interface GlobalContextInterface {
  contextInstance: number;
  setContextInstanceHandler: Function;
  userSession: any;
  setUserSessionHandler: Function;
  checkSession: boolean;
  setCheckSessionHandler: Function;
}

//Create context which will behave as a global variable
export const GlobalContext = createContext<GlobalContextInterface>({
  contextInstance: 0,
  setContextInstanceHandler: () => {},
  userSession: 0,
  setUserSessionHandler: () => {},
  checkSession: false,
  setCheckSessionHandler: () => {},
});

//Props for component
interface Props {
  children: React.ReactElement;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [contextInstance, setContextInstance] = useState<number>(1);
  const [userSession, setUserSession] = useState<any>({});
  const [checkSession, setCheckSession] = useState<boolean>(false);

  const setContextInstanceHandler = (value: number) => {
    setContextInstance(value);
  };

  const setUserSessionHandler = (value: any) => {
    setUserSession(value);
  };

  const setCheckSessionHandler = (value: boolean) => {
    setCheckSession(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        contextInstance,
        setContextInstanceHandler,
        userSession,
        setUserSessionHandler,
        checkSession,
        setCheckSessionHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
