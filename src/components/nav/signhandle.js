import SignIn from './signhandle/signin';
import SignUp from './signhandle/signup';
import { Component } from 'react';

class SignHandle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span onClick={this.props.signInModalHandler}>로그인</span>;
        {this.props.isOpenSignIn ? (
          <SignIn
            signInModalHandler={this.props.signInModalHandler}
            currentUser={this.props.currentUser}
            signUpModalHandler={this.props.signUpModalHandler}
            signInAndOutHandler={this.props.signInAndOutHandler}
          />
        ) : this.props.isOpenSignUp ? (
          <SignUp signUpModalHandler={this.props.signUpModalHandler} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default SignHandle;
