import React from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setPagesAmountAC } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'

class UsersAPIComponent extends React.Component {
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
    return <Users pagesAmount={ this.props.pagesAmount }
                  currentPage={ this.props.currentPage }
                  onPageChange={ (page) => { this.onPageChange(page) } }
                  users={ this.props.users }
                  follow={ this.props.follow }
                  unfollow={ this.props.unfollow } />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersPerPage: state.usersPage.usersPerPage,
    pagesAmount: state.usersPage.pagesAmount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setPagesAmount: (usersAmount) => {
      dispatch(setPagesAmountAC(usersAmount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)