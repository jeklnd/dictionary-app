import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ theme, onSearch, searchTerm }) {
  return searchTerm !== "" ? (
    <FormControl
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(e.target.elements.searchInput.value);
        // console.log("your search term is " + searchTerm);
      }}
    >
      <TextField
        sx={{
          display: "flex",
          marginTop: "2rem",
          "& .MuiInputBase-root": {
            borderRadius: "16px",
            fontSize: 20,
          },
          "&.MuiFormControl-root": {
            borderRadius: "16px",
            backgroundColor:
              theme.palette.mode === "light" ? "#f4f4f4" : "#1f1f1f",
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
        name="searchInput"
        label="Search"
        autoComplete="off"
        placeholder="Search for any word..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon color="secondary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </FormControl>
  ) : (
    <FormControl
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(e.target.elements.searchInput.value);
        // console.log("your search term is " + searchTerm);
      }}
    >
      <TextField
        sx={{
          display: "flex",
          marginTop: "2rem",
          "& .MuiInputBase-root": {
            borderRadius: "16px",
            fontSize: 20,
          },
          "&.MuiFormControl-root": {
            borderRadius: "16px",
            backgroundColor:
              theme.palette.mode === "light" ? "#f4f4f4" : "#1f1f1f",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.error.main,
            },
          },
          "& .MuiFormLabel-root": {
            "&.MuiInputLabel-root": {
              "&.Mui-focused": {
                color: theme.palette.error.main,
              },
            },
          },
        }}
        fullWidth={true}
        id="textfield"
        name="searchInput"
        label="Search"
        autoComplete="off"
        placeholder="Search for any word..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon color="secondary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Typography variant="body1" color={theme.palette.error.main} mt="8px">
        Please enter a word or phrase to search.
      </Typography>
    </FormControl>
  );
}
