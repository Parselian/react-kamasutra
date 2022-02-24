import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import FriendsList from "./FriendsList/FriendsList";

const Navbar = (props) => {

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={classes.link} activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/messages" className={classes.link} activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={classes.link} activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={classes.link} activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={classes.link} activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={classes.link} activeClassName={classes.active}>Settings</NavLink>
      </div>

      <FriendsList friends={ props.state.friends }/>
    </nav>
  )
}

export default Navbar