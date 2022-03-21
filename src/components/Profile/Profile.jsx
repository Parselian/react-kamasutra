import PostsContainer from './Posts/PostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo profileInfo={ props.profile.profileInfo } />

      <PostsContainer />
    </div>
  )
}

export default Profile