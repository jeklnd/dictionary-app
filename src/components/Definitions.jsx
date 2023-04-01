import React, { useState, useEffect } from "react";
import { Typography, Box, Fab, List, Link } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import axios from "axios";

export default function Definitions({ searchTerm, mode, onClick, theme }) {
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState([]);
  const [state, setState] = useState(["default"]);

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => {
        setData(response.data);
        setAudio(
          response.data[0].phonetics[0].audio &&
            new Audio(response.data[0].phonetics[0].audio)
        );
        setState("default");
        // console.log(
        //     `The response from the server is:\n`,
        //     response.data
        // );
      })
      .catch((error) => {
        console.log(error);
        if (searchTerm !== "") {
          setState("error");
        } else {
          setState("default");
        }
      });
  }, [searchTerm]);

  const word = data[0]?.word;

  const synonyms = data[0]?.meanings[0]?.synonyms;
  const synonymsArray = data[0]?.meanings[0]?.synonyms.map((synonym, i) => {
    return (
      <Link
        key={i}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          color: theme.palette.secondary.main,
          "& span:hover": {
            color: "rgba(182, 106, 240, 0.95)",
            textDecoration: "underline",
          },
        }}
        onClick={() => {
          onClick(synonym);
        }}
      >
        {i !== synonyms.length - 1 ? (
          <>
            <span>{synonym}</span>,{" "}
          </>
        ) : (
          <span>{synonym}</span>
        )}
      </Link>
    );
  });

  const partsOfSpeech = data[0]?.meanings.map((meaning, index) => (
    <li key={index}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography variant="h2">{meaning.partOfSpeech}</Typography>
        <Box
          sx={{
            borderTop: "1px solid #e9e9e9",
            flexGrow: 1,
            marginTop: "24px",
          }}
        ></Box>
      </Box>

      <Typography variant="h3">Meaning</Typography>
      <ul>
        {data[0]?.meanings[index].definitions.map((d, i) => {
          if (d.definition) {
            return (
              <li key={i} style={{ padding: "6px 0" }}>
                <Typography
                  variant="body1"
                  sx={
                    mode === "light" ? { color: "#2d2d2d" } : { color: "#fff" }
                  }
                >
                  {d.definition}
                </Typography>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </li>
  ));

  return state !== "error" ? (
    <>
      {/* heading section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h1">{word}</Typography>
          <Typography color="secondary">{data[0]?.phonetic}</Typography>
        </Box>

        {audio && (
          <Fab
            elevation={1}
            sx={{
              "&.MuiButtonBase-root": {
                color: "rgb(164,69,237)",
                backgroundColor: "rgba(164, 69, 237, .25)",
              },
              "&:hover": {
                "&.MuiButtonBase-root": {
                  color: "#fff",
                  backgroundColor: "rgba(164, 69, 237, 1)",
                },
              },
            }}
            onClick={() => {
              audio.play();
            }}
          >
            <PlayArrowIcon fontSize="large" />
          </Fab>
        )}
      </Box>

      {/* parts of speech and definitions */}
      <List
        sx={{
          "& ul li::before": {
            content: "'•'",
            color: "#8F19E8",
            marginLeft: "-22px",
            lineHeight: 1,
            fontSize: "26px",
            position: "absolute",
          },
          ul: { listStyleType: "none" },
        }}
      >
        {partsOfSpeech}
      </List>

      {/* synonyms */}
      {synonyms && (
        <Box sx={{ display: "flex", gap: "22px" }}>
          <Typography variant="h3">Synonyms</Typography>
          <Typography variant="h4" color="secondary" sx={{ marginTop: "40px" }}>
            {synonymsArray}
          </Typography>
        </Box>
      )}

      {/* source */}
      <Box sx={{ pb: "2rem", display: "flex", alignItems: "center" }}>
        <Typography variant="body2">
          Source
          <Link
            href={data[0]?.sourceUrls[0]}
            target="_blank"
            rel="noopener"
            sx={
              mode === "light"
                ? { color: "#2d2d2d", paddingLeft: "20px" }
                : { color: "#fff", paddingLeft: "20px" }
            }
          >
            {data[0]?.sourceUrls[0]}
          </Link>
        </Typography>
        <Link href={data[0]?.sourceUrls[0]} target="_blank" rel="noopener">
          <OpenInNewIcon
            sx={{
              marginLeft: "9px",
              color: "#757575",
              alignSelf: "flex-start",
              height: "14px",
              width: "14px",
            }}
          />
        </Link>
      </Box>
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReportProblemIcon
        sx={{ color: theme.palette.secondary.main, margin: "44px 0" }}
        fontSize="large"
      />
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: mode === "dark" ? "#fff" : "#2d2d2d",
          mb: "24px",
        }}
      >
        No Definitions Found
      </Typography>
      <Typography sx={{ textAlign: "center", color: "#757575" }}>
        We couldn't find a definition for {searchTerm}. Please check your
        spelling and try again, or search for a related term. Thank you.
      </Typography>
    </Box>
  );
}
