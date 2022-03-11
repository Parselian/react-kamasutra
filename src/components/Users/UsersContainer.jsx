import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setPagesAmountAC } from '../../redux/usersReducer'
import Users from './Users'

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)