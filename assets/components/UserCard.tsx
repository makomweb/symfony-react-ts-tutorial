import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import React from "react";
import {User} from "./User";

export function UserCard(user: User) {
    return (
        <Card sx={{minWidth: 275, m: 2}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.age} years old
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
