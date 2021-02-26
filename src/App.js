import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Progress, Image, Divider, Icon, Header, Grid, Label} from 'semantic-ui-react'
import choco from "./choco.jpg"
import {db} from './fb.js'

import Comments from './comment.js'

function App() {

  let [like, like_] = useState([parseInt(0)])

  function Click_like() {
    var lk = like;
    lk = parseInt(lk + 1)
    like_(lk)
  }

  return (
    <div>
      <div><img src={choco} className="choco"/><br/></div>
      <br/>
      <Grid centered>
    <Button as='div' labelPosition='right' >
      <Button color='red' onClick={Click_like}>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {parseInt(like)}
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>
    </Grid>
    <br/>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment' />
        댓글을 달아주세요
      </Header>
    </Divider>

    <Grid className='comments'>
        <Comments/>
    </Grid>

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
