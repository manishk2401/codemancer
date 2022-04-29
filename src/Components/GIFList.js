import { Grid, Link } from "@mui/material";
import React from "react";
import style from "./giflist.module.css";

export default function GIFList(props) {
  // let text = props.gifresult ? console.log(props.gifresult) : "";
  return (
    <div className={style.postlistcontainer}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.gifresult
          ? props.gifresult.results.map((el, i) => {
              let imgUrl = el["media"][0]["nanogif"]["url"];
              return (
                <Grid item xs={2} sm={4} md={4} key={i}>
                  <Link
                    href="#"
                    onClick={() => {
                      props.gotoPostForm(false);
                      props.selectImg(imgUrl);
                    }}
                    underline="none"
                  >
                    <img src={imgUrl} alt="" />
                  </Link>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}
