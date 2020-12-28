import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios"
import UsersPage from "./UsersPage";


class UsersPageContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageAC(1);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then(response => {
          this.props.setUsersAC(response.data.items);
        })
  }
  onFollow = (id) => {
    this.props.followAC(id);
  };
  onUnfollow = (id) => {
    this.props.unfollowAC(id);
  };
  onPageChange = (page) => {
    this.props.setCurrentPageAC(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsersAC(response.data.items);
        })
  }
  render() {
    return <UsersPage {...this.props}
                      onPageChange={this.onPageChange}
                      onFollow={this.onFollow}
                      onUnfollow={this.onUnfollow}
    />

  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    userImage: state.usersPage.userImage,
  }
}
export default connect(mapStateToProps, {followAC, unfollowAC, setUsersAC, setCurrentPageAC})(UsersPageContainer);