import classes from './Message.module.css'

const Message = (props) => {
  return (
    <div className={classes.message}>
      <img src="https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg" alt=""
           className={classes.img}/>
      <div className={classes.text}>{props.message}</div>
    </div>
  )
}

export default Message