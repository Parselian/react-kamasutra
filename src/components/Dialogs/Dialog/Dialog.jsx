import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom"

const Dialog = (props) => {
  const path = `/messages/${props.id}`

  return (
    <NavLink to={path} className={classes.dialog} activeClassName={classes.active}>
      <img src={props.img} alt="photo"
           className={classes['dialog__img']}/>
      <span className={classes['dialog__name']}>{props.name}</span>
      <span className="dialog__text">{props.msg}</span>
    </NavLink>
  )
}

export default Dialog