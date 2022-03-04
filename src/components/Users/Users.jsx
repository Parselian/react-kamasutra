import classes from './users.module.css'
import React from 'react'
import * as axios from 'axios'
import avatar from '../../assets/images/avatar.jpg'

const Users = (props) => {

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then( response => {
        props.setUsers(response.data.items)
      } )
  }

  return props.users.map(user => (
    <section className={ classes.user }>
      <div className={ classes.userPreview }>
        <img className={ classes.userAvatar } src={ user.photos.small || avatar } alt=""/>
        {
          user.isFollowed
            ? <button className={ classes.userButton } onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
            : <button className={ classes.userButton } onClick={ () => { props.follow(user.id) } }>Follow</button>
        }
      </div>
      <div className={ classes.userInfo }>
        <div className={ classes.userInfoRow, classes.userInfoCredentials }>
          <div className={ classes.userName }>{ user.name }</div>
          <div className={ classes.userLocation }>
            <span className={ classes.userCountry } > hidden,</span>
            <span className={ classes.userCity }> hidden</span>
          </div>
        </div>
        <div className={ classes.userStatus }>{ user.status }</div>
      </div>
    </section>
  ))
}

export default Users