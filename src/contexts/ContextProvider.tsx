import React, { createContext, useContext, useState } from "react";

export type AppContext = {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: NavBarButtonState;
    setIsClicked: React.Dispatch<React.SetStateAction<NavBarButtonState>>;
    handleClick: (clicked: string) => void;
    screenSize: number | undefined;
    setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;

}

type NavBarButtonState = {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean
}

const initialState: NavBarButtonState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}



export const StateContext = createContext<AppContext | null>(null);


const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState<NavBarButtonState>(initialState);
    const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

    const handleClick = (clicked: string) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }


    return <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>
        {children}
    </StateContext.Provider>
}

export default ContextProvider;