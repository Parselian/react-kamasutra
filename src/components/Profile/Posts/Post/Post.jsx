import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.row}>
        <img src="https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg"
             alt="photo" className={classes.bubble}/>
        <div className={classes.text}>
          {props.message}
        </div>
      </div>

      <div className={`${classes.row} ${classes.likes}`}>
        <button className="button like">Like</button>
        <span className="likesCount">{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post