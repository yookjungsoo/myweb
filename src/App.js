import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Progress, Image} from 'semantic-ui-react'
import ar from "./arin.jpg"

import Comments from './comment.js'

function App() {
  return (
    <div>
    <p>안녕하세요</p>
    <Button primary> Test1 </Button>
    <Button> hihihi</Button>
    <Progress percent={66} indicating /> 
    <Image src = {ar} centered size='medium'/>
    <Comments/>
    </div>
  );
}

export default App;
