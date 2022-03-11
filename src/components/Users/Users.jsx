import classes from './users.module.css'
import React from 'react'
import * as axios from 'axios'
import avatar from '../../assets/images/avatar.jpg'

class Users extends React.Component {
  // IF WE DON`T ADD UNIQUE FUNCTIONALITY INTO CONSTRUCTOR, WE CAN DON`T DESCRIBE IT`S LOGIC
  /*
    constructor(props) {
      super(props); // export props object into constructor of parent class (React.Component)
    }
  */

  // This method will call only ONE time: when component will return .JSX first time.
  componentDidMount() {
      this.getUsers()
  }

  getUsers() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setPagesAmount(response.data.totalCount)
      })
  }

  onPageChange(page) {
    this.props.setCurrentPage(page)
    this.getUsers()
  }

  // This method is unique for every component because we return different .JSX in different components
  render() {
    const pagesArr = []

    for (let i = 1; i <= this.props.pagesAmount && i <= 10; i++) {
      pagesArr.push(i)
    }

    return (<section>
      <div>
        {pagesArr.map(page => {
          return <button className={page === this.props.currentPage ? classes.currentPage : ''}
                         onClick={(event) => {
                           this.onPageChange(page)
                         }}>{page}</button>
        })}
      </div>
      {this.props.users.map(user => (<div className={classes.user} key={user.id}>
        <div className={classes.userPreview}>
          <img className={classes.userAvatar} src={user.photos.small || avatar} alt=""/>
          {user.isFollowed ? <button className={classes.userButton} onClick={() => {
            this.props.unfollow(user.id)
          }}>Unfollow</button> : <button className={classes.userButton} onClick={() => {
            this.props.follow(user.id)
          }}>Follow</button>}
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userInfoRow, classes.userInfoCredentials}>
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
}

export default Users