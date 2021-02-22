import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import user from "./user.png"

function SingleComment (detail) {
  return(
    <Comment>
      <Comment.Avatar src={user} />
      <Comment.Content>
        <Comment.Author as='a'>Guest</Comment.Author>
        <Comment.Metadata>
          <div>10min before</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
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
      commentsList : []
    }
  }

  render(){
    return(
      <Comment.Group style={{marginLeft:'400px'}}>
    <Header as='h3' dividing>
      Comments
    </Header>
    
    {this.state.commentsList.map(comments => <SingleComment content = {comments}/>)}

    <Form reply>
      <Form.TextArea value = {this.state.inputContent} placeholder = "댓글을 입력해주세요" onChange={(e) => this.setState({inputContent: e.target.value})}  />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary
      onClick={() => alert(this.setState( (prevState) => {return{
        commentsList : [...prevState.commentsList, this.state.inputContent],
        inputContent: ""
        }}))} />
    </Form>
      </Comment.Group>
    )
  }
}

export default Comments