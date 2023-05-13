import React from 'react';
import './App.css';
//import material ui grid
import { Grid } from '@material-ui/core';
import SearchBarComp from '././compoent/SearchBarComp';
import youtube from './api/youtube';

function App() {

  return (
    <Grid justify="center" container spacing={16} style={{ justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <SearchBarComp onSubmit={onSubmit} />
        </Grid>
        <Grid container spacing={10}>
          {/*video detail*/}
        </Grid>
        <Grid container spacing={4}>
          {/*video list*/}
        </Grid>
      </Grid>
    </Grid>
  );

  async function onSubmit(searchTerm) {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key:'AIzaSyCAe-j2iPxCQU9HXfRWbrypEaicbre_5l8',
        q: searchTerm //search term
      } //search term
    })
    console.log(response.data.items);
  }
}

export default App;
