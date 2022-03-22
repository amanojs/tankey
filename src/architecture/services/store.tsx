import React, { useState } from 'react';
import { useContext } from 'react';
import { User } from 'architecture/domains/User';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>();

    const value = {
        user,
        updateUser: setUser
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
