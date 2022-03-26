import { calcRemainingPer, Tank } from 'architecture/domains/Tank';

type Props = Tank;

export const TankCard = ({ tankId, title, badget, consumption }: Props) => {
    return (
        <>
            <div className="tank-card">
                <h3>{title}</h3>
                <div>{calcRemainingPer({ tankId, title, badget, consumption })}%</div>
                <p>
                    {consumption}/{badget}
                </p>
            </div>
        </>
    );
};
