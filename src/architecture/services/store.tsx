import React, { useState } from 'react';
import { useContext } from 'react';
import { User } from 'architecture/domains/User';
import { Tank } from 'architecture/domains/Tank';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [tanks, setTanks] = useState<Tank[]>([
        { tankId: 'tank1', title: '食費', badget: 25000, consumption: 12000 },
        { tankId: 'tank2', title: 'ゆとり費', badget: 10000, consumption: 12000 },
        { tankId: 'tank3', title: '日用品', badget: 5000, consumption: 2000 }
    ]);

    const value = {
        user,
        updateUser: setUser,
        tanks,
        updateTanks: setTanks
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
