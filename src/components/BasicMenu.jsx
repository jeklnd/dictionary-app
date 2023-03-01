import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function BasicMenu({ theme }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;
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
                sx={{ color: theme.palette.text.primary }}
                endIcon={<KeyboardArrowDownIcon color="secondary" />}
            >
                Sans Serif
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>Sans Serif</MenuItem>
                <MenuItem onClick={handleClose}>Serif</MenuItem>
                <MenuItem onClick={handleClose}>Mono</MenuItem>
            </Menu>
        </div>
    );
}
