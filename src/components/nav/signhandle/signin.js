import { Component } from 'react';
import dummy_data from '../../../dummy_data/dummy_data';
import githubImg from '../../../styles/contents/github.webp';
import kakaoImg from '../../../styles/contents/kakaologin2.png';
import naverImg from '../../../styles/contents/naverlogin.png';
import emailImg from '../../../styles/contents/email.jpeg';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      isOpenEmailLogin: false,
    };
  }
  handleEmailLogin() {
    this.setState((pres) => ({ isOpenEmailLogin: !pres.isOpenEmailLogin }));
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleSignIn = () => {
    if (
      !this.state.email.includes('@') ||
      this.state.email.length <= 6 ||
      this.state.password.length <= 8
    ) {
      return;
    }
    let body = {
      email: this.state.email,
      password: this.state.password,
    };
    const url = 'http://3.35.21.164:3000/users/signin';
    // this.props.signInModalHandler();
    // this.props.signInAndOutHandler(dummy_data.user[0]);
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
        if (body.status === 500) {
          this.setState({
            errorMessage: '이메일 또는 비밀번호를 확인해주세요.',
          });
        } else {
          body.password = undefined;
          this.setState({ errorMessage: '' });
          let userData = body;
          localStorage.setItem('currentUser', JSON.stringify(userData));
          this.props.signInModalHandler();
          this.props.signInAndOutHandler(userData);
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMessage: '네트워크에 문제가 있습니다.' });
        throw err;
      });
  };

  render() {
    const redirectURI = encodeURI(
      'http://3.35.21.164:3000/users/signin/naverlogin/callback'
    );
    const client_id = '228zVx2bad5gY6VoK5Gg';
    const state = '12345';
    return (
      <div>
        {!this.state.isOpenEmailLogin ? (
          <div>
            <span
              className="signhandle_modal"
              onClick={this.props.signInModalHandler}
            ></span>

            <span className="sign_in_and_out">
              <span className="signin_intro">
                <div className="signin_intro_text">흥</div>
                <div className="signin_intro_text">신</div>
                <div className="signin_intro_text">소</div>
              </span>
              <span className="signin_login">
                <div className="signin_login_title"></div>
                <div
                  className="signin_login_content"
                  onClick={this.handleEmailLogin.bind(this)}
                >
                  <img
                    className="signin_login_content_img"
                    src={emailImg}
                  ></img>
                  <a className="signin_login_content_a">이메일 로그인</a>
                </div>
                <div className="signin_login_content">
                  <img
                    className="signin_login_content_img"
                    src={githubImg}
                  ></img>
                  <a
                    className="signin_login_content_a"
                    href="https://github.com/login/oauth/authorize?client_id=67284f7fd9e4bc6602f7&redirect_uri=http://3.35.21.164:3000/users/signin/callback"
                  >
                    GitHub 로그인
                  </a>
                </div>
                <div className="signin_login_content">
                  <img
                    className="signin_login_content_img"
                    src={naverImg}
                  ></img>
                  <a
                    className="signin_login_content_a"
                    href={
                      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
                      client_id +
                      '&redirect_uri=' +
                      redirectURI +
                      '&state=' +
                      state
                    }
                  >
                    {' '}
                    네이버 로그인
                  </a>
                </div>
                <div className="signin_login_content">
                  <img
                    className="signin_login_content_img"
                    src={kakaoImg}
                  ></img>
                  <a
                    className="signin_login_content_a"
                    href="http://3.35.21.164:3000/users/signin/kakaologin"
                  >
                    {' '}
                    카카오 로그인
                  </a>
                </div>
              </span>
            </span>
          </div>
        ) : (
          <div>
            <span
              className="signhandle_modal"
              onClick={this.props.signInModalHandler}
            ></span>
            <div className="sign_in_and_out">
              <div className="signin_email">
                <div className="signin_email_item">
                  <div className="signin_email_item_content">이메일 로그인</div>
                </div>
                <form
                  className="signin_email_item"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="signin_email_input"
                    type="email"
                    placeholder="이메일"
                    onChange={this.handleInputValue('email')}
                  ></input>

                  <input
                    className="signin_email_input"
                    type="password"
                    placeholder="비밀번호 숫자, 문자 포함 8자리 이상"
                    onChange={this.handleInputValue('password')}
                  ></input>
                  {!this.state.email.includes('@') ? (
                    <div className="signin_email_input">
                      이메일을 입력하세요
                    </div>
                  ) : this.state.password.length <= 8 ? (
                    <div className="signin_email_input">
                      비밀번호를 8자 이상 입력하세요
                    </div>
                  ) : (
                    <div> {this.state.errorMessage}</div>
                  )}
                  <button
                    className="signin_email_input"
                    type="submit"
                    onClick={this.handleSignIn}
                  >
                    로그인
                  </button>
                </form>
                <div
                  className="signin_email_item"
                  onClick={(event) => {
                    this.props.signUpModalHandler();
                    this.props.signInModalHandler();
                  }}
                >
                  아이디가 없으신가요?
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignIn;
