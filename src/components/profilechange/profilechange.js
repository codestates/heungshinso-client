import { Component } from 'react';
import '../../styles/profile.css';
class ProfileChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUserData.username || '',
      phone_number: this.props.currentUserData.phone_number || '',
      birthday: this.props.currentUserData.birthday || '',
      user_region: this.props.currentUserData.user_region || '',
      user_position: this.props.currentUserData.user_position || '',
      user_status: this.props.currentUserData.user_status || '',
    };
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleUserValue = () => {
    let body = {
      ...this.state,
    };
    const url = 'http://localhost:4000/profile';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((body) => {
        this.setState({ errorMessage: '' });
        this.props.ProfileChangeModalHandler();
        this.props.changeCurrentUserHandler(this.state);
      })
      .catch((err) => {
        this.setState({ errorMessage: '네트워크에 문제가 있습니다.' });
        throw err;
      });
  };
  render() {
    return (
      <div id="profile-change">
        <div>
          닉네임{' '}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div>
          전화번호{' '}
          <input
            type="text"
            value={this.state.phone_number}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div>
          생년월일{' '}
          <input
            type="text"
            value={this.state.birthday}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div>
          직무{' '}
          <input
            type="text"
            value={this.state.user_position}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div>
          지역{' '}
          <input
            type="text"
            value={this.state.user_region}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div>
          상태{' '}
          <input
            type="text"
            value={this.state.user_status}
            onChange={this.handleInputValue.bind(this)}
          ></input>
        </div>
        <div onClick={this.props.profileChangeModalHandler}>확인</div>
      </div>
    );
  }
}

export default ProfileChange;
