import { calcExBadget } from 'architecture/domains/Tank';
import { useTankStorage, useUserStorage } from 'architecture/util/ defaultService';
import { useEffect, useState } from 'react';
import { AddTankCard } from './AddTankCard';
import { TankCard } from './TankCard';

export const TankList = () => {
    const { user } = useUserStorage();
    const { tanks } = useTankStorage();
    const [exBadget, setExBadget] = useState<number>(0);

    useEffect(() => {
        console.log(tanks);
        const exBadgetTmp = calcExBadget(tanks, user?.totalBadget || 0);
        setExBadget(exBadgetTmp);
    }, [tanks, user]);

    return (
        <>
            <div>
                {tanks.map((tank) => {
                    return <TankCard key={tank.tankId} {...tank} />;
                })}

                <AddTankCard />
            </div>
        </>
    );
};
