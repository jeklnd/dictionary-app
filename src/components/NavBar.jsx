import React from "react";
import {
    Box,
    AppBar,
    Container,
    Toolbar,
    Divider,
    Switch,
} from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import BasicMenu from "./BasicMenu";

export default function NavBar({ darkTheme, onToggle, theme }) {
    return (
        <AppBar position="sticky" elevation={0} color="default">
            <Container>
                <Toolbar>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <MenuBookOutlinedIcon
                            sx={
                                theme.palette.mode === "light"
                                    ? { color: theme.palette.grey[600] }
                                    : { color: theme.palette.secondary.main }
                            }
                        />
                    </Box>
                    <BasicMenu theme={theme} />
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        sx={{ height: 28 }}
                    />{" "}
                    <Switch
                        color="secondary"
                        checked={theme === darkTheme}
                        onChange={onToggle}
                        sx={{
                            "& .MuiSwitch-thumb": {
                                width: "0.75rem",
                                height: "0.75rem",
                            },
                            "& .MuiButtonBase-root": {
                                transform: "translate(4.5px, 3.7px)",
                            },
                            "& .Mui-checked": {
                                transform: "translate(23px, 3.8px) !important",
                            },
                        }}
                    />
                    <DarkModeOutlinedIcon
                        sx={
                            theme.palette.mode === "light"
                                ? { color: theme.palette.grey[600] }
                                : { color: theme.palette.secondary.main }
                        }
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
