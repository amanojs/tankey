import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading: FC = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <CircularProgress color="primary" />
        </div>
    );
};
