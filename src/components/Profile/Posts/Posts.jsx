import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <form action="#" method="POST" className={classes.form}>
        <textarea name="" id="" cols="30" rows="10" className={classes.textarea} placeholder="Your news"></textarea>
        <button type="submit" className={classes.submit}>Send</button>
      </form>

      <Post message="Post lorem 1" likesCount="9"/>
      <Post message="Post lorem 2" likesCount="-5"/>
      <Post message="Post lorem 3" likesCount="0"/>
    </div>
  )
}

export default Posts