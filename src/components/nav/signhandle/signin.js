import { Component } from 'react';
import dummy_data from '../../../dummy_data/dummy_data';

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
    const url = 'http://localhost:3000/users/signin';
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
        this.setState({ errorMessage: '' });
        console.log(body);
        // this.props.history.push("/")
        this.props.signInModalHandler();
        this.props.signInAndOutHandler(dummy_data.user[0]);
      })
      .catch((err) => {
        this.setState({ errorMessage: '네트워크에 문제가 있습니다.' });
        throw err;
      });
  };

  render() {
    return (
      <div id="sign-in">
        {!this.state.isOpenEmailLogin ? (
          <center>
            <div onClick={this.handleEmailLogin.bind(this)}>
              이메일로 로그인
            </div>
            <div>
              <a href="https://github.com/login/oauth/authorize?client_id=67284f7fd9e4bc6602f7&redirect_uri=http://3.35.21.164:3000/users/signin/callback">
                GitHub로 로그인
              </a>
            </div>
          </center>
        ) : (

            <center id="email-login">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <input
                    type="email"
                    placeholder="이메일"
                    onChange={this.handleInputValue('email')}
                  ></input>
                  <span onClick={this.props.signInModalHandler}>X</span>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="비밀번호 숫자, 문자 포함 8자리 이상"
                    onChange={this.handleInputValue('password')}
                  ></input>
                </div>
                <button type="submit" onClick={this.handleSignIn}>
                  로그인
              </button>
                {!this.state.email.includes('@') ? (
                  <div>"이메일을 입력하세요"</div>
                ) : this.state.password.length <= 8 ? (
                  <div>비밀번호를 8자 이상 입력하세요</div>
                ) : (
                      <div>{this.state.errorMessage}</div>
                    )}
              </form>
              <div
                onClick={(event) => {
                  this.props.signUpModalHandler();
                  this.props.signInModalHandler();
                }}
              >
                아이디가 없으신가요?
            </div>
            </center>
          )}

        
      </div>
    );
  }
}

export default SignIn;
