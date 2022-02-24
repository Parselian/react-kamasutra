import classes from './users.module.css'
import React from 'react'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        isFollowed: true,
        imgUrl: 'https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg',
        name: 'Alex',
        status: 'Catch them all!',
        location: {country: 'France', city: 'Paris'}
      },
      {
        id: 2,
        isFollowed: false,
        imgUrl: 'https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg',
        name: 'Stephan',
        status: 'F*ck my life',
        location: {country: 'Germany', city: 'Berlin'}
      }
    ])
  }

  return props.users.map(user => (
    <section className={ classes.user }>
      <div className={ classes.userPreview }>
        <img className={ classes.userAvatar } src={user.imgUrl} alt=""/>
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
            <span className={ classes.userCountry } >{ user.location.country },</span>
            <span className={ classes.userCity }>{ user.location.city }</span>
          </div>
        </div>
        <div className={ classes.userStatus }>{ user.status }</div>
      </div>
    </section>
  ))
}

export default Users