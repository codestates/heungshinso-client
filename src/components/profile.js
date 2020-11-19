import { Component } from 'react';
import Main from './main';
import ProfileChange from './profilechange/profilechange';
import '../styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

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
      <div className="profile">
        <main className="profile-info">
          <div
            className="user-info-view"
            onClick={
              this.state.isOpenProfileChange
                ? this.profileChangeModalHandler.bind(this)
                : () => {}
            }
          >
            <div className="profile-user">
              <div className="profile-username">
                {this.props.currentUserData.username}
              </div>
              <div className="profile-emailset">
                <div className="profile-emailicon">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </div>
                <div className="profile-email">
                  {this.props.currentUserData.email}
                </div>
              </div>
              {/* <div>전화번호: {this.props.currentUserData.phone_number}</div>
                <div>생일: {this.props.currentUserData.birthday}</div>
                <div>지역: {this.props.currentUserData.user_region}</div>
                <div>직무: {this.props.currentUserData.user_position}</div>
                <div>상태: {this.props.currentUserData.user_status}</div> */}
            </div>
            <div className="profile-userimg">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GtyhoGchm80rlFAnXyoQOQAAAA%26pid%3DApi&f=1"
                className="profile-img"
              ></img>
            </div>
          </div>
          <div className="profile-change">
            <button
              className="profile-change-button"
              onClick={this.profileChangeModalHandler.bind(this)}
            >
              프로필 변경
            </button>
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
