import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import React from "react";

export function UserCard(props) {
    const { user, increaseScore } = props;
    return (
        <Card sx={{minWidth: 275, m: 2}}>
            <CardActionArea onClick={increaseScore} disabled={user.increasing}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        has {user.score} {user.score > 1 ? 'points' : 'point'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
