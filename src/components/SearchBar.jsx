import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ theme, onSearch }) {
    return (
        <>
            <TextField
                sx={{
                    display: "flex",
                    marginTop: "2rem",
                    "& .MuiInputBase-root": { borderRadius: "16px" },
                    "&.MuiFormControl-root": {
                        borderRadius: "16px",
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? "#f4f4f4"
                                : "#1f1f1f",
                    },
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                            borderColor: theme.palette.secondary.main,
                        },
                    },
                    "& .MuiFormLabel-root": {
                        "&.MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: theme.palette.secondary.main,
                            },
                        },
                    },
                }}
                fullWidth={true}
                id="textfield"
                label="Search"
                // value={e.target.value}
                placeholder="Search for any word..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon color="secondary" />
                        </InputAdornment>
                    ),
                }}
                // onSubmit={onSearch((e) => e.target.value)}
            />
            asdf
            <TextField
                error
                sx={{
                    display: "flex",
                    marginTop: "2rem",
                    "& .MuiInputBase-root": { borderRadius: "16px" },
                    "&.MuiFormControl-root": {
                        borderRadius: "16px",
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? "#f4f4f4"
                                : "#1f1f1f",
                    },
                }}
                fullWidth={true}
                id="error"
                placeholder="Search for any word..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon color="secondary" />
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
}
