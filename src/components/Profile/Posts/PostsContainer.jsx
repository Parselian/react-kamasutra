import classes from "./Posts.module.css"
import Post from "./Post/Post"
import Posts from "./Posts"
import React from "react"
import {addPostActionCreator, savePostActionCreator} from "../../../redux/profileReducer"


const PostsContainer = (props) => {
  const state = props.store.getState().profilePage

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  const savePostDraft = (text) => {
    const action = savePostActionCreator(text)
    props.store.dispatch(action)
  }

  return <Posts savePostDraft={savePostDraft} addPost={addPost} posts={state.posts} postDraft={state.postDraft}/>
}

export default PostsContainer