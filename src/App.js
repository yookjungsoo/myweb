import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Progress, Image, Divider, Icon, Header, Grid, Label} from 'semantic-ui-react'
import ar from "./choco.jpg"

import Comments from './comment.js'
import Buttons from "./buttons.js"
import Menus from "./menu.js"

function App() {
  return (
    <div>
    <Menus />
    <Grid centered>
      <Grid.Row>
        <Image src = {ar} centered size='medium'/>
      </Grid.Row>
    
    <Grid.Row>
    <Buttons />
  </Grid.Row>

  </Grid>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment' />
        댓글을 달아주세요
      </Header>
    </Divider>
    <Comments/>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='phone' />
        Contact
      </Header>
    </Divider>
    <div>
    <Grid centered>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='google plus'>
      <Icon name='google' /> Gmail
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube' onClick={() => window.open("https://www.youtube.com/")}>
      <Icon name='youtube' /> YouTube
    </Button>
    </Grid>
  </div>
    </div>
  );
}

export default App;
