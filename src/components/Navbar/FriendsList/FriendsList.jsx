import classes from "./FriendsList.module.css";
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
  let friends = props.friends.map((friend) => {
    let url = `/friends/${friend.id}`

    return (
      <NavLink to={ url } className={classes.friend} key={friend.id}>
        <img src={ friend.img }
             className={classes.avatar}/>
        <span className={classes.name}>{ friend.name }</span>
      </NavLink>
    )
  })

  return (
    <div className={classes.friends}>
      <div className={classes['friends__title']}>Friends online</div>

      <div className={classes['friends__list']}>
        { friends }
      </div>
    </div>
  )
}

export default FriendsList