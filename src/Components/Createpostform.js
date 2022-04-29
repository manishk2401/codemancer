import { Button, Card, CardContent, IconButton, Link, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import style from "./createpost.module.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function Createpostform(props) {
  return (
    <Card sx={{ width: 450 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Create Post
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TextareaAutosize
            className={style.textArea}
            onChange={(e) => props.postChange(e)}
            minRows={5}
            cols={30}
            placeholder="What's on your mind ?"
          />
        </Typography>
        {props.addGif ? (
          <div className={style.selectedGif}>
            <img src={props.addGif} alt="" />
            <IconButton onClick={() => props.removeGif()} size="small">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
        ) : (
          <Button color="secondary" className={style.gifBtn} onClick={() => props.addGifForm(true)} variant="contained" endIcon={<AddIcon />}>
            GIF
          </Button>
        )}

        {props.poststatus ? (
          <Button variant="contained" fullWidth disabled>
            POST
          </Button>
        ) : (
          <Button size="small" variant="contained" onClick={props.post()} fullWidth>
            POST
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
