import React, { useState, useEffect } from "react";
import {
    Typography,
    Stack,
    Card,
    CardContent,
    Box,
    Fab,
    List,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "axios";

export default function Definition({ searchTerm }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
            )
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                console.log(
                    response.data[0].meanings.forEach((meaning) =>
                        console.log(meaning)
                    )
                );
            })
            .catch((error) => console.log(error));
    }, []);

    // const synonyms = data[0]?.meanings[0]?.synonyms.map(
    //     (s: any, i: number) => {
    //         if (s.definition) {
    //             return (
    //                 <li key={i} style={{ listStyleType: "disc" }}>
    //                     {s.definition}
    //                 </li>
    //             );
    //         } else {
    //             return null;
    //         }
    //     }
    // );

    const definitions = data[0]?.meanings[0].definitions.map((d, i) => {
        if (d.definition) {
            return (
                <li key={i} style={{ listStyleType: "disc" }}>
                    {d.definition}
                </li>
            );
        } else {
            return null;
        }
    });

    const partsOfSpeech = data[0]?.meanings.map((meaning, index) => (
        <li key={index}>
            <Typography variant="h3">{meaning.partOfSpeech}</Typography>
            <Typography variant="h4">Meaning</Typography>
            <ul>{definitions}</ul>
            {/* <ul>{synonyms}</ul> */}
        </li>
    ));

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h2">{data[0]?.word}</Typography>
                    <Typography color="secondary">
                        {data[0]?.phonetic}
                    </Typography>
                </Box>
                <Fab color="secondary">
                    <PlayArrowIcon fontSize="large" />
                </Fab>
            </Box>
            <Card elevation={0}>
                <CardContent sx={{ padding: 0 }}>
                    <Stack spacing={2}>
                        <List>{partsOfSpeech}</List>
                        <Typography variant="h3">Synonyms</Typography>
                        <Typography color="secondary">
                            data.meanings.definitions.synonyms[0]
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}
