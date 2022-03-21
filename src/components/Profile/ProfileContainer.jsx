import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {setUserProfileInfo} from '../../redux/profileReducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/22850')
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

export default connect(mapStateToProps, {setUserProfileInfo})(ProfileContainer)