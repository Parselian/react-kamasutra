import React from 'react'
import classes from './users.module.css'
import avatar from '../../assets/images/avatar.jpg'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
  const pagesArr = []

  for (let i = 1; i <= props.pagesAmount && i <= 10; i++) {
    pagesArr.push(i)
  }

  return (<section>
    <div>
      {pagesArr.map(page => {
        return <button className={page === props.currentPage ? classes.currentPage : ''}
                       onClick={(event) => {
                         props.onPageChange(page)
                       }} key={page}>{page}</button>
      })}
    </div>
    {props.users.map(user => (<div className={classes.user} key={user.id}>
      <div className={classes.userPreview}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={classes.userAvatar} src={user.photos.small || avatar} alt=""/>
        </NavLink>

        {user.isFollowed ? <button className={classes.userButton} onClick={() => {
          props.unfollow(user.id)
        }}>Unfollow</button> : <button className={classes.userButton} onClick={() => {
          props.follow(user.id)
        }}>Follow</button>}
      </div>
      <div className={classes.userInfo}>
        <div className={[classes.userInfoRow, classes.userInfoCredentials]}>
          <div className={classes.userName}>{user.name}</div>
          <div className={classes.userLocation}>
            <span className={classes.userCountry}> hidden,</span>
            <span className={classes.userCity}> hidden</span>
          </div>
        </div>
        <div className={classes.userStatus}>{user.status}</div>
      </div>
    </div>))}
  </section>)
}

export default Users