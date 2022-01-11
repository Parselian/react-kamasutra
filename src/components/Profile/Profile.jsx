import PostsContainer from './Posts/PostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />

      <PostsContainer store={props.store}/>
    </div>
  )
}

export default Profile