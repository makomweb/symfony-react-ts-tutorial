import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import React, {useContext} from "react";
import {UserCard} from "./UserCard";
import {UsersContext} from "../contexts/UsersContext";

export default function UsersView() {
    const { users, increaseScore } = useContext(UsersContext);

    const getContent = () => {
        if (users === null) {
            return <Grid flexGrow={1} textAlign={'center'}><CircularProgress /></Grid>;
        }

        if (users.length === 0) {
            return <Typography align={'center'}>There are no users!</Typography>;
        }

        return users.map((user, index) => {
                return (
                    <UserCard
                        key={index}
                        user={user}
                        increaseScore={() => increaseScore(user)}
                    />
                );
            }
        )
    }

    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            alignContent={'center'}
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                { getContent() }
            </Grid>
        </Grid>
    );
}
