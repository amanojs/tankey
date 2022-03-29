import React, { useState } from 'react';
import { useContext } from 'react';
import { User } from 'architecture/domains/User';
import { createTank, Tank } from 'architecture/domains/Tank';
import { addTankParam } from 'architecture/applications/ports';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [tanks, setTanks] = useState<Tank[]>([
        { tankId: 'tank1', title: '食費', badget: 25000, consumption: 12000 },
        { tankId: 'tank2', title: 'ゆとり費', badget: 10000, consumption: 12000 },
        { tankId: 'tank3', title: '日用品', badget: 5000, consumption: 2000 }
    ]);
    const addTank = ({ title, badget }: addTankParam) => {
        const tankId = getUniqueStr();
        const newtank = createTank({ tankId, title, badget, consumption: 0 });
        setTanks([...tanks, newtank]);
    };
    const value = {
        user,
        updateUser: setUser,
        addTank,
        tanks,
        updateTanks: setTanks
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

function getUniqueStr(myStrong?: number): string {
    let strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
}
