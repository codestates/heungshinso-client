import { Component } from 'react';
import Main from './main';
import ProfileChange from './profilechange/profilechange';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenProfileChange: false,
    };
  }
  profileChangeModalHandler() {
    this.setState((prestate) => ({
      isOpenProfileChange: !prestate.isOpenProfileChange,
    }));
  }
  render() {
    return (
      <main>
        <div
          id="profile"
          onClick={
            this.state.isOpenProfileChange
              ? this.profileChangeModalHandler.bind(this)
              : () => {}
          }
        >
          <div id="profile--img">
            <img></img>
          </div>
          <div id="profile-userdata">
            <div>{this.props.currentUserData.username}</div>
            <div>{this.props.currentUserData.email}</div>
            <div>{this.props.currentUserData.phone_number}</div>
            <div>{this.props.currentUserData.birthday}</div>
            <div>{this.props.currentUserData.user_region}</div>
            <div>{this.props.currentUserData.user_position}</div>
            <div>{this.props.currentUserData.user_status}</div>
          </div>
        </div>
        <div onClick={this.profileChangeModalHandler.bind(this)}>
          프로필 변경
        </div>
        {this.state.isOpenProfileChange ? (
          <ProfileChange
            changeCurrentUserHandler={this.props.changeCurrentUserHandler}
            profileChangeModalHandler={this.profileChangeModalHandler.bind(
              this
            )}
            currentUserData={this.props.currentUserData}
          />
        ) : (
          <div></div>
        )}
      </main>
    );
  }
}

export default Profile;
