import {Container, Grid, Typography} from "@mui/material";
import React, {useContext} from "react";
import {UserCard} from "./UserCard";
import {UsersContext} from "../contexts/UsersContext";

export default function UsersView() {
    const { users } = useContext(UsersContext);

    if (users === null) {
        return <Typography>Loading ...</Typography>;
    }

    if (users.length === 0) {
        return <Typography>There are no users!</Typography>;
    }

    return (
        <Container>
            <Grid container>
                {
                    users.map((user, index) =>
                        <UserCard key={index} name={user.name} age={user.age} />
                    )
                }
            </Grid>
        </Container>
    );
}
