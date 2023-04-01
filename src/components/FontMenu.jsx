import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function BasicMenu({ theme, onFont, mode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="text"
        sx={{
          color: theme.palette.text.primary,
          textTransform: "none",
          fontSize: "18px",
        }}
        endIcon={<KeyboardArrowDownIcon color="secondary" />}
      >
        {theme.typography.fontFamily === "Lora"
          ? "Serif"
          : theme.typography.fontFamily === "Inconsolata"
          ? "Mono"
          : "Sans-serif"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px",
            ...(mode === "dark" && {
              boxShadow:
                "0px 5px 5px -3px rgb(164 69 237 / 20%), 0px 8px 10px 1px rgb(164 69 237 / 14%), 0px 3px 14px 2px rgb(164 69 237 / 12%)",
            }),
          },
        }}
      >
        <MenuItem
          sx={{ fontFamily: "Inter" }}
          onClick={() => {
            handleClose();
            onFont("Inter");
          }}
        >
          Sans-serif
        </MenuItem>
        <MenuItem
          sx={{ fontFamily: "Lora" }}
          onClick={() => {
            handleClose();
            onFont("Lora");
          }}
        >
          Serif
        </MenuItem>
        <MenuItem
          sx={{ fontFamily: "Inconsolata" }}
          onClick={() => {
            handleClose();
            onFont("Inconsolata");
          }}
        >
          Mono
        </MenuItem>
      </Menu>
    </div>
  );
}
