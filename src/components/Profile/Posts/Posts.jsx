import classes from "./Posts.module.css"
import Post from "./Post/Post"
import React from "react"

const Posts = (props) => {
  const posts = props.state.posts.map(post => <Post message={post.text} likesCount={post.likesCount}/>)
  const newPostElement = React.createRef()
  const addPost = () => {
    props.store.addPost(props.state.postDraft)
  }

  const savePostDraft = () => {
    let text = newPostElement.current.value

    props.store.savePostDraft(text)
  }

  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <div className={classes.form}>
        <textarea ref={newPostElement} onChange={savePostDraft} cols="30" rows="10" className={classes.textarea}
                  placeholder="Your news" value={props.state.postDraft}/>
        <button onClick={addPost} className={classes.submit}>Send</button>
      </div>

      {posts}
    </div>
  )
}

export default Posts