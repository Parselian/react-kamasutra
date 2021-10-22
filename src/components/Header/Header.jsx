import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg" className={classes.img} alt="logo"/>
    </header>
  )
}

export default Header