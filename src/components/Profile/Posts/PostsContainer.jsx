import classes from "./Posts.module.css"
import Post from "./Post/Post"
import Posts from "./Posts"
import React from "react"
import StoreContext from "../../../StoreContext"
import {addPostActionCreator, savePostActionCreator} from "../../../redux/profileReducer"


const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().profilePage
          const addPost = () => {
            store.dispatch(addPostActionCreator())
          }
          const savePostDraft = (text) => {
            const action = savePostActionCreator(text)
            store.dispatch(action)
          }

          return <Posts savePostDraft={savePostDraft} addPost={addPost} posts={state.posts}
                        postDraft={state.postDraft}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default PostsContainer