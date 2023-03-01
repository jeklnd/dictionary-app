import React from "react";

import {
    CssBaseline,
    Box,
    Container,
    Typography,
    Stack,
    Link,
} from "@mui/material";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Definition from "./components/Definition";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        secondary: {
            main: "#a445ed",
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
        secondary: {
            main: "#a445ed",
        },
    },

});

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [searchTerm, setSearchTerm] = useState("engineering")
    console.log(theme)
    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <NavBar theme={theme} darkTheme={darkTheme} onToggle={toggleTheme}/>
                <Container component="main">
                    <Stack spacing={2}>
                        <SearchBar theme={theme} onSearch={setSearchTerm}/>
                        <Definition searchTerm={searchTerm}/>
                        <Box sx={{ pb: "2rem" }}>
                            <Typography variant="h4">Source</Typography>
                            <Link>source.com</Link>
                        </Box>
                    </Stack>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
