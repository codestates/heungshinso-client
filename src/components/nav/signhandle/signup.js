import { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleSignUp = () => {
    if (
      !this.state.email.includes('@') ||
      this.state.email.length <= 6 ||
      this.state.password.length <= 8
    ) {
      return;
    }
    const url = 'http://localhost:3000/users/signup';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((body) => {
        if (body.status === 409) {
          this.setState({ errorMessage: '이미 가입된 이메일입니다.' });
        } else {
          console.log(body);
          this.setState({ errorMessage: '' });
          // this.props.signUpModalHandler();
        }
      })
      .catch((err) => {
        console.log('err,', err);
        this.setState({ errorMessage: '네트워크에 문제가 있습니다.' });
        throw err;
      });
  };
  render() {
    return (
      <div>
        <div
          className="signhandle_modal"
          onClick={this.props.signUpModalHandler}
        ></div>
        <div className="sign_in_and_out">
          회원가입
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <input
                type="email"
                placeholder="이메일 입력"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호 숫자, 문자 포함 8자리 이상"
                onChange={this.handleInputValue('password')}
              ></input>
            </div>
            <button type="submit" onClick={this.handleSignUp}>
              회원가입
            </button>
            {!this.state.email.includes('@') ? (
              <div>"이메일을 입력하세요"</div>
            ) : this.state.password.length <= 8 ? (
              <div>비밀번호를 8자 이상 입력하세요</div>
            ) : (
                  <div>{this.state.errorMessage}</div>
                )}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
