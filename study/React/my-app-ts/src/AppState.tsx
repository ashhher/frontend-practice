import React, { useState } from "react";

interface AppStateValue {
    username: string,
    shoppingCart: { items: { id: number; name: string }[] }
}

const defaultContextValue: AppStateValue = {
    username: 'Alex',
    shoppingCart: {
        items: []
    },
}

export const appContext = React.createContext(defaultContextValue); // 需要访问state的引用
export const appSetContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined); // 需要修改state的引用

export const AppStateProvider: React.FC = (props) => {
    const [globalState, setGlobalState] = useState<AppStateValue>(defaultContextValue);

    return <appContext.Provider value={globalState}>
        <appSetContext.Provider value={setGlobalState}>
            {props.children}
        </appSetContext.Provider>
    </appContext.Provider>;
}