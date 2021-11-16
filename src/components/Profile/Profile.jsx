import Posts from './Posts/Posts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />

      <Posts state={props.state} store={props.store} addPost={props.addPost} savePostDraft={props.savePostDraft}/>
    </div>
  )
}

export default Profile