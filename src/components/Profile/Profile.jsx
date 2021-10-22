import Posts from './Posts/Posts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src="https://uprostim.com/wp-content/uploads/2021/05/image014-7.jpg" alt="banner" className={classes.banner}/>

      <div className={classes.about}>
        <img src="https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg"
             alt="photo" className={classes.photo}/>

        <div className={classes.info}>
          <h2 className={classes.username}>Pavel K.</h2>

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
            <span className={classes['row__info']}>https://google.com</span>
          </div>
        </div>
      </div>

      <Posts />
    </div>
  )
}

export default Profile