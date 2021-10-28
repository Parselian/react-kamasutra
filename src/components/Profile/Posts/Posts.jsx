import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let postsData = [
    {
      text: "Post lorem 1",
      likesCount: 9
    },
    {
      text: "Post lorem 2",
      likesCount: 3
    },
    {
      text: "Post lorem 3",
      likesCount: 0
    }
  ];

  return (
    <div className={classes.posts}>
      <h2 className="section__title">Posts</h2>

      <form action="#" method="POST" className={classes.form}>
        <textarea name="" id="" cols="30" rows="10" className={classes.textarea} placeholder="Your news"></textarea>
        <button type="submit" className={classes.submit}>Send</button>
      </form>

      <Post message={postsData[0].text} likesCount={postsData[0].likesCount}/>
      <Post message={postsData[1].text} likesCount={postsData[1].likesCount}/>
      <Post message={postsData[2].text} likesCount={postsData[2].likesCount}/>
    </div>
  )
}

export default Posts