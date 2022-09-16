import {
    Card,
    CardActionArea,
    CardContent,
    Chip,
    CircularProgress,
    Typography
} from "@mui/material";
import React from "react";

export function UserCard(props) {
    const { user, increaseScore } = props;

    const getScoreText = () => {
        const { score } = user;
        if (score === 0) {
            return 'no points';
        }

        if (score === 1) {
            return '1 point';
        }

        return `${score} points`;
    }

    return (
        <Card sx={{minWidth: 275, m: 2}}>
            <CardActionArea onClick={increaseScore} disabled={user.increasing}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    {
                        user.increasing
                            ? <CircularProgress size={26}/>
                            : <Chip label={getScoreText()} color={'success'} />
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
