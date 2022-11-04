import {Button, CircularProgress, Container, Grid, Typography} from "@mui/material";
import React, {useContext} from "react";
import {PlayerCard} from "./PlayerCard";
import {PlayersContext} from "../contexts/PlayersContext";

export default function PlayersView() {
    const { players, increaseScore, resetScores } = useContext(PlayersContext);

    const getContent = () => {
        if (players === null) {
            return <Grid flexGrow={1} textAlign={'center'}><CircularProgress /></Grid>;
        }

        if (players.length === 0) {
            return <Typography align={'center'}>There are no players!</Typography>;
        }

        return (
            <>
                {
                    players.map((player, index) => {
                        return (
                            <PlayerCard
                                key={index}
                                user={player}
                                increaseScore={() => increaseScore(player)}
                            />
                        );
                    })
                }
                <Button onClick={resetScores}>Reset</Button>
            </>
        );
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
