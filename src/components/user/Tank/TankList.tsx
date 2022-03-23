import { useReset } from 'architecture/applications/reset';
import { calcRemainingPer } from 'architecture/domains/Tank';
import { useTankStorage, useUserStorage } from 'architecture/util/ defaultService';
import { useEffect } from 'react';

export const TankList = () => {
    const { tanks } = useTankStorage();

    useEffect(() => {
        console.log(tanks);
    }, [tanks]);

    return (
        <>
            <div>
                {tanks.map((tank) => {
                    return (
                        <div key={tank.tankId}>
                            <h3>{tank.title}</h3>
                            <div>{calcRemainingPer(tank)}%</div>
                            <p>
                                {tank.consumption}/{tank.badget}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
