import React, { useState } from 'react';
import { useContext } from 'react';
import { User } from 'architecture/domains/User';
import { Tank } from 'architecture/domains/Tank';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [tanks, setTanks] = useState<Tank[]>();

    const value = {
        user,
        updateUser: setUser,
        tanks,
        updateTanks: setTanks
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
