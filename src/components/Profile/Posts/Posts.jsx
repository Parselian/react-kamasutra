import classes from "./Posts.module.css"
import Post from "./Post/Post"
import React from "react"

const Posts = (props) => {
  const posts = props.posts.map(post => <Post message={post.text} likesCount={post.likesCount}/>)

  const savePostDraft = (e) => {
    let text = e.target.value
    props.savePostDraft(text)
  }

  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <div className={classes.form}>
        <textarea onChange={savePostDraft} cols="30" rows="10" className={classes.textarea}
                  placeholder="Your news" value={props.postDraft}/>
        <button onClick={props.addPost} className={classes.submit}>Send</button>
      </div>

      {posts}
    </div>
  )
}

export default Posts