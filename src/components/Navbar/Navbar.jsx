import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
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
        <NavLink to="/music" className={classes.link} activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={classes.link} activeClassName={classes.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar