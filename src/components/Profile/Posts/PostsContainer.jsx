import classes from "./Posts.module.css"
import Post from "./Post/Post"
import Posts from "./Posts"
import React from "react"
import { connect } from "react-redux"
import {addPostActionCreator, savePostActionCreator} from "../../../redux/profileReducer"


/*const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      { //Открывающая фигурная скобка ОБЯЗАТЕЛЬНО должна стоять на следующей строке!!!!!!
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
}*/

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postDraft: state.profilePage.postDraft
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePostDraft: (text) => {
      const action = savePostActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer