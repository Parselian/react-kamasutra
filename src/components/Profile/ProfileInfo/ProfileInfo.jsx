import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <></>
  }
  return (
    <div>
      <img src={props.profileInfo.photos.large} alt="banner"
           className={classes.banner}/>

      <div className={classes.about}>
        <img src={props.profileInfo.photos.small}
             alt="photo" className={classes.photo}/>

        <div className={classes.info}>
          <h2 className={classes.username}>{props.profileInfo.fullName}</h2>

          <div className={classes.row}>
            <span className="title">Date of Birth:</span>
            <span className={classes['row__info']}>7 july</span>
          </div>
          <div className={classes.row}>
            <span className="title">City:</span>
            <span className={classes['row__info']}>Novosibirsk</span>
          </div>
          <div className={classes.row}>
            <span className="title">Education:</span>
            <span className={classes['row__info']}>ETU'16</span>
          </div>
          <div className={classes.row}>
            <span className="title">Web Site:</span>
            <span className={classes['row__info']}>{props.profileInfo.contacts.website}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo