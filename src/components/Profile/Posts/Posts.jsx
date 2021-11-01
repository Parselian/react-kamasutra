import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {

  const posts = props.data.posts.map(post => <Post message={post.text} likesCount={post.likesCount}/>)

  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <form action="#" method="POST" className={classes.form}>
        <textarea name="" id="" cols="30" rows="10" className={classes.textarea} placeholder="Your news"></textarea>
        <button type="submit" className={classes.submit}>Send</button>
      </form>

      { posts }
    </div>
  )
}

export default Posts