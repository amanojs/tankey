import { useReset } from 'architecture/applications/reset';
import { calcRemainingPer } from 'architecture/domains/Tank';
import { useTankStorage, useUserStorage } from 'architecture/util/ defaultService';
import { useEffect } from 'react';
import { TankCard } from './TankCard';

export const TankList = () => {
    const { tanks } = useTankStorage();

    useEffect(() => {
        console.log(tanks);
    }, [tanks]);

    return (
        <>
            <div>
                {tanks.map((tank) => {
                    return <TankCard key={tank.tankId} {...tank} />;
                })}
            </div>
        </>
    );
};
