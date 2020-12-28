import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostActionCreator, setProfile, updateBufferTextActionCreator} from "../../redux/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let profile;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+this.props.match.params.userId)
        .then(response => {
          profile = {
            id: response.data.userId,
            name: response.data.fullName,
            photos: response.data.photos,
            status: response.data.aboutMe,
          }
          this.props.setProfile(profile);
        })
  }

  render() {
    return (
        <Profile {...this.props}/>)
  }
}

const mapStateToProps = (state) => {
  return {profilePage: state.profilePage}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(updateBufferTextActionCreator(value))
    },
    onSubmit: (value) => {
      if (value !== '') {
        dispatch(addPostActionCreator());
        dispatch(updateBufferTextActionCreator(''))
      }
    },
    setProfile: (profile) => {
      dispatch(setProfile(profile))
    }
  }
}
let WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer)