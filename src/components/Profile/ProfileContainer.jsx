import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as axios from 'axios'
import {setUserProfileInfo} from '../../redux/profileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    // 22712 - my ID
    let userID = this.props.match.params.userId || 22712

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then( promise => {
        this.props.setUserProfileInfo(promise.data)
      } )
  }
  render() {
    return <Profile profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage
})

// returns URL data into component (works like connect() method)
const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileInfo})(WithUrlDataContainerComponent)