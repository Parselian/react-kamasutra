import classes from "./Posts.module.css"
import Post from "./Post/Post"
import React from "react"

const Posts = (props) => {
  const posts = props.data.posts.map(post => <Post message={post.text} likesCount={post.likesCount}/>)
  const newPostElement = React.createRef()
  const addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)

    newPostElement.current.value = null
  }

  const savePostDraft = () => {
    let text = newPostElement.current.value
    props.savePostDraft(text)

  }

  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <div className={classes.form}>
        <textarea ref={newPostElement} onInput={savePostDraft} cols="30" rows="10" className={classes.textarea}
                  placeholder="Your news"></textarea>
        <button onClick={addPost} className={classes.submit}>Send</button>
      </div>

      {posts}
    </div>
  )
}

export default Posts