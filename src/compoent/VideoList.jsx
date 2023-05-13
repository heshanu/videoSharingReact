import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VIdeoItem";

const VideoList = ({ videos, onVideoSelect }) => {

  const listOfVideos = videos.map(video => (
    <VideoItem
    onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;