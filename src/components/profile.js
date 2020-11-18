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
      <div id="profile">
        <main class="profile">
          <div
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
              <div>이름{this.props.currentUserData.username}</div>
              <div>이메일{this.props.currentUserData.email}</div>
              <div>전화번호{this.props.currentUserData.phone_number}</div>
              <div>생일{this.props.currentUserData.birthday}</div>
              <div>지역{this.props.currentUserData.user_region}</div>
              <div>직무{this.props.currentUserData.user_position}</div>
              <div>상태{this.props.currentUserData.user_status}</div>
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
      </div>
    );
  }
}

export default Profile;
