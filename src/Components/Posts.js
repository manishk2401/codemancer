import React from "react";
import Postcard from "./Postcard";

export default function Posts(props) {
  // console.log(props.data);
  return (
    <div sx={{ width: 450 }}>
      <h3 style={{ marginBottom: "0.5em" }}>Activities</h3>
      {props.data.length ? (
        props.data.map((el, i) => {
          return (
            <div key={i}>
              {" "}
              <Postcard item={el} />
            </div>
          );
        })
      ) : (
        <h5> No Post to Display.</h5>
      )}
    </div>
  );
}
