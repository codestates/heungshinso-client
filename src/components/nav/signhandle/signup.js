import { Component } from 'react';
import { serverAddress } from '../../../app';
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
      this.state.password.length < 8
    ) {
      return;
    }
    const url = `${serverAddress}/users/signup`;
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
          this.props.signUpModalHandler();
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
          <div className="signup_container">
            <form
              className="signup_container_form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="signup_container_form_title">회원가입</div>
              <div>
                <input
                  className="signup_container_form_email"
                  type="email"
                  placeholder="email"
                  onChange={this.handleInputValue('email')}
                ></input>
              </div>
              <div className="signup_container_form_password">
                <input
                  type="password"
                  placeholder="password"
                  onChange={this.handleInputValue('password')}
                ></input>
              </div>

              {!this.state.email.includes('@') ? (
                <div className="signup_container_form_error">
                  이메일을 입력하세요
                </div>
              ) : this.state.password.length < 8 ? (
                <div className="signup_container_form_error">
                  비밀번호를 8자 이상 입력하세요
                </div>
              ) : (
                <div>{this.state.errorMessage}</div>
              )}
              <button
                className="signup_container_form_button"
                type="submit"
                onClick={this.handleSignUp}
              >
                회원가입
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
