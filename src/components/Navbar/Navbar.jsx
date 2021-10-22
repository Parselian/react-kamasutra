import classes from './Navbar.module.css'

const linkActive = `${classes.item} ${classes.active}`

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href="#" className={classes.link}>Profile</a>
      </div>
      <div className={linkActive}>
        <a href="#" className={classes.link}>Messages</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.link}>News</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.link}>Music</a>
      </div>
      <div className={classes.item}>
        <a href="#" className={classes.link}>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar