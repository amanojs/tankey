import AddIcon from '@mui/icons-material/AddTwoTone';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

export const AddTankCard = () => {
    return (
        <Button className="block w-28 h-28 p-0">
            <Card className="w-full h-full flex flex-wrap justify-center items-center">
                <AddIcon color="primary" fontSize="large" />
            </Card>
        </Button>
    );
};
