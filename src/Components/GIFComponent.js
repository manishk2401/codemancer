import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import style from "./createpost.module.css";

export default function GIFComponent(props) {
  const [searchValue, setSearchValue] = useState("");
  // console.log(props);
  return (
    <>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => props.gotoPostForm(false)}>
            <ArrowBackIcon />
          </IconButton>
        }
        title="Choose a GIF"
        subheader=""
      />
      <CardContent>
        <Typography variant="body2" className={style.searchGroup} color="text.secondary">
          <SearchIcon></SearchIcon>
          <input
            type="text"
            placeholder="Search gif..."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              props.search(searchValue);
            }}
          >
            Search
          </button>
        </Typography>
      </CardContent>
    </>
  );
}
