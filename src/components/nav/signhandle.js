import SignIn from './signhandle/signin';
import SignUp from './signhandle/signup';
import { Helmet } from 'react-helmet';
import { Component } from 'react';
import '../../styles/signin.css';
class SignHandle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span className="nav_page_item">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <span onClick={this.props.signInModalHandler}>로그인</span>
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
      </span>
    );
  }
}

export default SignHandle;
