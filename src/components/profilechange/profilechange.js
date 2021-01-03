import { Component } from 'react';
import { FaChessBishop } from 'react-icons/fa';
import '../../styles/profilechange.css';
import { serverAddress } from '../../app';
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
      regions: [
        '서울특별시',
        '부산광역시',
        '인천광역시',
        '대구광역시',
        '광주광역시',
        '대전광역시',
        '울산광역시',
        '세종시',
        '경기도',
        '강원도',
        '충청북도',
        '충청남도',
        '경상북도',
        '경상남도',
        '전라북도',
        '전라남도',
        '제주도',
      ],
      positions: ['Developer', 'Designer', 'Planner', 'ETC'],
      statuses: ['구직중', '구인중', '재직중', '이직희망', '사이드잡희망'],
    };
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  componentDidMount() {
    let buttons = document.querySelectorAll('button');
    if (this.state.regions.includes(this.state.user_region)) {
      for (let val of buttons) {
        if (val.textContent === this.state.user_region) {
          val.style.backgroundColor = 'black';
        }
      }
    } else {
      this.setState({ user_region: '' });
    }
    if (this.state.positions.includes(this.state.user_position)) {
      for (let val of buttons) {
        if (val.textContent === this.state.user_position) {
          val.style.backgroundColor = 'black';
        }
      }
    } else {
      this.setState({ user_position: '' });
    }
    if (this.state.statuses.includes(this.state.user_status)) {
      for (let val of buttons) {
        if (val.textContent === this.state.user_status) {
          val.style.backgroundColor = 'black';
        }
      }
    } else {
      this.setState({ user_status: '' });
    }
  }
  handleSelect = (key) => (e) => {
    if (key === 'user_position') {
      if (this.state.user_position === '') {
        e.target.style.backgroundColor = 'black';
        this.setState({ [key]: e.target.textContent });
      } else if (e.target.textContent === this.state.user_position) {
        e.target.style.backgroundColor = 'rgba(80, 80, 80, 0.555)';
        this.setState({ [key]: '' });
      }
    }
    if (key === 'user_region') {
      if (this.state.user_region === '') {
        e.target.style.backgroundColor = 'black';
        this.setState({ [key]: e.target.textContent });
      } else if (e.target.textContent === this.state.user_region) {
        e.target.style.backgroundColor = 'rgba(80, 80, 80, 0.555)';
        this.setState({ [key]: '' });
      }
    }
    if (key === 'user_status') {
      if (this.state.user_status === '') {
        e.target.style.backgroundColor = 'black';
        this.setState({ [key]: e.target.textContent });
      } else if (e.target.textContent === this.state.user_status) {
        e.target.style.backgroundColor = 'rgba(80, 80, 80, 0.555)';
        this.setState({ [key]: '' });
      }
    }
  };
  handleUserValue = () => {
    console.log(1);
    let body = {
      username: this.state.username,
      phone_number: this.state.phone_number,
      birthday: this.state.birthday,
      user_region: this.state.user_region,
      user_position: this.state.user_position,
      user_status: this.state.user_status,
      email: this.props.currentUserData.email,
    };

    const url = `${serverAddress}/users/profile`;
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((body) => {
        this.props.changeCurrentUserHandler(this.state);
        this.props.profileChangeModalHandler();
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    return (
      <div>
        <div
          className="signhandle_modal"
          onClick={this.props.profileChangeModalHandler}
        ></div>
        <div className="profilechange_container">
          <div className="profilechange_container_item">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GtyhoGchm80rlFAnXyoQOQAAAA%26pid%3DApi&f=1"
              className="profile-img"
            ></img>
          </div>
          <div className="profilechange_container_item">
            <span>이름</span>
            <input
              className="profilechange_container_input"
              type="text"
              value={this.state.username}
              onChange={this.handleInputValue('username').bind(this)}
            ></input>
          </div>
          <div className="profilechange_container_item">
            <span>전화번호</span>
            <input
              className="profilechange_container_input"
              type="text"
              value={this.state.phone_number}
              onChange={this.handleInputValue('phone_number').bind(this)}
            ></input>
          </div>
          <div className="profilechange_container_item">
            <span>생년월일</span>
            <input
              className="profilechange_container_input"
              type="text"
              value={this.state.birthday}
              onChange={this.handleInputValue('birthday').bind(this)}
            ></input>
          </div>
          <div className="profilechange_container_item">
            <span>직무</span>
            <button onClick={this.handleSelect('user_position').bind(this)}>
              Developer
            </button>
            <button onClick={this.handleSelect('user_position').bind(this)}>
              Designer
            </button>
            <button onClick={this.handleSelect('user_position').bind(this)}>
              Planner
            </button>
            <button onClick={this.handleSelect('user_position').bind(this)}>
              ETC
            </button>
          </div>
          <div className="profilechange_container_item">
            <span>지역</span>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              서울특별시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              부산광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              인천광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              대구광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              광주광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              대전광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              울산광역시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              세종시
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              경기도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              강원도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              충청북도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              충청남도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              경상북도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              경상남도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              전라북도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              전라남도
            </button>
            <button onClick={this.handleSelect('user_region').bind(this)}>
              제주도
            </button>
          </div>
          <div className="profilechange_container_item">
            <span>상태 </span>
            <button onClick={this.handleSelect('user_status').bind(this)}>
              구직중
            </button>
            <button onClick={this.handleSelect('user_status').bind(this)}>
              구인중
            </button>
            <button onClick={this.handleSelect('user_status').bind(this)}>
              재직중
            </button>
            <button onClick={this.handleSelect('user_status').bind(this)}>
              이직희망
            </button>
            <button onClick={this.handleSelect('user_status').bind(this)}>
              사이드잡희망
            </button>
          </div>
          <div className="profilechange_container_item">
            {' '}
            <button
              className="profilechange_container_item_send"
              onClick={this.handleUserValue}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileChange;
