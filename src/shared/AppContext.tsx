import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
  isMenuVisible: boolean;
  setIsMenuVisible: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Context = createContext<AppContextInterface | null>(null);

export const AppContextProvider = (props: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <Context.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      {props.children}
    </Context.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useAppContext = () => useContext(Context)!;