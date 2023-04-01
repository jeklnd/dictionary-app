import React from "react";
import { CssBaseline, Container, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Definitions from "./components/Definitions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [font, setFont] = useState("Inter");
  const [searchTerm, setSearchTerm] = useState("play");

  const theme = createTheme({
    palette: {
      mode: mode,
      secondary: {
        main: "#a445ed",
      },
    },
    typography: {
      fontFamily: font,
      h1: {
        //word
        fontSize: 64,
        fontWeight: "bold",
        marginTop: 39,
        marginBottom: 10,
      },
      h2: {
        //partOfSpeech
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: 24,
      },
      h3: {
        //meaning/synonyms
        fontSize: 20,
        marginTop: 40,
        marginBottom: 25,
        color: "#757575",
      },
      h4: {
        //input / synonym list
        fontSize: 20,
        fontWeight: "bold",
      },
      body1: {
        //definition list items
        fontSize: 18,
        lineHeight: 1.33,
      },
      body2: {
        //source
        fontSize: 14,
        color: "#757575",
      },
    },
  });
  // console.log(`Your theme is: \n`, theme);
  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar
          theme={theme}
          onToggle={toggleTheme}
          mode={mode}
          onFont={setFont}
        />
        <Container component="main">
          <Stack spacing={2}>
            <SearchBar
              theme={theme}
              onSearch={setSearchTerm}
              searchTerm={searchTerm}
            />

            <Definitions
              searchTerm={searchTerm}
              mode={mode}
              onClick={setSearchTerm}
              theme={theme}
            />
          </Stack>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
