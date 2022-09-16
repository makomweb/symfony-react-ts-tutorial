import {Container, Grid} from "@mui/material";
import React from "react";
import {UserCard} from "./UserCard";
import {User} from "./User";

const john: User = {
    name: "John Doe",
    age: 23,
}

const jane: User = {
    name: "Jane Doe",
    age: 24,
}

export default function UsersView() {
    return (
        <Container>
            <Grid container>
                <UserCard name={john.name} age={john.age} />
                <UserCard name={jane.name} age={jane.age} />
            </Grid>
        </Container>
    );
}
