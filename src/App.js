import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

//import components
import SearchBarComp from "././compoent/SearchBarComp";
import VideoDetailComp from "././compoent/VideoDetailsComp";
import VideoList from "././compoent/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  const onVideoSelect = (video) => {

  }
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBarComp onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetailComp video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCAe-j2iPxCQU9HXfRWbrypEaicbre_5l8",
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;