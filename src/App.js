import "./App.css";
import Posts from "./Components/Posts";
import { useEffect, useState } from "react";
import GIFComponent from "./Components/GIFComponent";
import Createpostform from "./Components/Createpostform";
import GIFList from "./Components/GIFList";
import { Card } from "@mui/material";
const axios = require("axios").default;

function App() {
  const [postContent, setPostContent] = useState("");
  const [searchGIF, setSearchGIF] = useState("");
  const [postDisalbe, setPostDisable] = useState(true);
  const [gifForm, setGifForm] = useState(false);
  const [selectedGif, setSelectedGif] = useState("");
  const [postList, setPostList] = useState([]);

  useEffect(() => {}, []);

  const changeHandler = (e) => {
    setPostContent(e.target.value);
    e.target.textLength ? setPostDisable(false) : setPostDisable(true);
  };
  const addGifForm = (e) => {
    setGifForm(e);
  };

  const postActivity = () => {
    setPostList([...postList, { text: postContent, gif: selectedGif }]);
    setPostContent("");
    setSelectedGif("");
  };

  const searchGif = (e) => {
    const ghipyAPI = "NFM8U6SGCIIH";
    axios
      .post("https://g.tenor.com/v1/search?key=" + ghipyAPI + "&q=" + e)
      .then(function (response) {
        setSearchGIF(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {gifForm ? (
            <Card sx={{ width: 450 }}>
              <GIFComponent search={searchGif} gotoPostForm={addGifForm}></GIFComponent>
              <GIFList selectImg={(e) => setSelectedGif(e)} gotoPostForm={addGifForm} gifresult={searchGIF}></GIFList>
            </Card>
          ) : (
            <Createpostform
              post={() => postActivity}
              removeGif={(e) => setSelectedGif("")}
              addGif={selectedGif}
              addGifForm={addGifForm}
              postChange={changeHandler}
              poststatus={postDisalbe}
            ></Createpostform>
          )}
        </div>
        <Posts data={postList}></Posts>
      </header>
    </div>
  );
}

export default App;
