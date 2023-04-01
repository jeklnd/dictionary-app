import React from "react";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Divider,
  Switch,
  IconButton,
} from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FontMenu from "./FontMenu";

export default function NavBar({ theme, onToggle, mode, onFont }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Container>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AutoStoriesOutlinedIcon
              sx={{ color: theme.palette.grey[600] }}
              fontSize="large"
            />
          </Box>
          <FontMenu theme={theme} onFont={onFont} mode={mode} />
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: 28 }}
          />{" "}
          <Switch
            color="secondary"
            checked={mode === "dark"}
            onChange={onToggle}
            sx={{
              "& .MuiSwitch-thumb": {
                width: "0.75rem",
                height: "0.75rem",
                color: "#fff !important",
              },
              "& .MuiButtonBase-root": {
                transform: "translate(4.5px, 3.7px)",
              },
              "& .Mui-checked": {
                transform: "translate(23px, 3.8px) !important",
              },
            }}
          />
          <IconButton checked={mode === "dark"} onClick={onToggle}>
            <DarkModeOutlinedIcon
              sx={
                theme.palette.mode === "light"
                  ? { color: theme.palette.grey[600] }
                  : { color: theme.palette.secondary.main }
              }
            />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
