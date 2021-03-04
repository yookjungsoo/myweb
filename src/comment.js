import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import user from "./user.png"
import moment from 'moment';
import db from './fb.js'

function SingleComment (detail) {
  return(
    <Comment>
      <Comment.Avatar src={user} />
      <Comment.Content>
        <Comment.Author as='a'>Guest</Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}


class Comments extends React.Component{
  
  constructor(){
    super()
    this.state = {
      inputContent : '',
      inputTime : "",
      writer : "",
      commentsList : [],
    }
  }
  
  componentDidMount = () => {
    db.collection("comments").get().then((querySnapshot) => {
      let comments = []
      querySnapshot.forEach((doc) => {
        comments.push(doc.data())
      });
      return comments
  }).then(res => (this.setState({commentsList: res})))
  }
  
  render(){
    return(
      <Comment.Group className="comments">
    <Header as='h3' dividing>
      Comments
    </Header>
    
    {this.state.commentsList.map(comments => <SingleComment info = {comments}/>)}

    <Form reply className="form">
      <Form.TextArea 
      value = {this.state.inputContent} placeholder = "댓글을 입력해주세요" onChange={(e) => this.setState({inputContent: e.target.value})} className="comment_input"  />

      <Button 
      content='Add Reply' 
      labelPosition='left' 
      icon='edit' primary
      onClick={() => 
        this.setState( (prevState) => 
        {return{
        commentsList : [...prevState.commentsList, {content: this.state.inputContent, time: moment().format('YYYY MMMM Do , h:mm a')}],
        inputContent: ""
        }})} />
    </Form>
      </Comment.Group>
    )
  }
}

export default Comments