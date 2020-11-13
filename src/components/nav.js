import { Component } from 'react';
import SignHandle from './nav/signhandle';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

class Nav extends Component {
  handleSignOut = () => {
    const url = 'http://localhost:4000/users/signin';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    if (this.props.currentUser.isLogin) {
      return (
        <nav>
          <span>
            <NavLink exact to="/" activeClassName="active">
              main
            </NavLink>
          </span>
          <span>
            <NavLink to="/recruit" activeClassName="active">
              모집
            </NavLink>
          </span>
          <span>
            <NavLink to="/apply" activeClassName="active">
              찾기
            </NavLink>
          </span>
          <span>
            <NavLink to="/createTeam" activeClassName="active">
              팀생성
            </NavLink>
          </span>
          <span>
            <NavLink to="/profile" activeClassName="active">
              프로필
            </NavLink>
          </span>
          <span
            onClick={() => {
              this.handleSignOut();
              this.props.signInAndOutHandler(null);
            }}
          >
            로그아웃
          </span>
        </nav>
      );
    } else {
      return (
        <nav>
          <span>
            <NavLink exact to="/" activeClassName="active">
              main
            </NavLink>
          </span>
          <span>
            <NavLink to="/recruit" activeClassName="active">
              모집
            </NavLink>
          </span>
          <span>
            <NavLink to="/apply" activeClassName="active">
              찾기
            </NavLink>
          </span>
          <span>
            <NavLink to="/createTeam" activeClassName="active">
              팀생성
            </NavLink>
          </span>
          <span>
            <NavLink to="/profile" activeClassName="active">
              프로필
            </NavLink>
          </span>
          <span>
            <SignHandle
              signInModalHandler={this.props.signInModalHandler}
              isOpenSignIn={this.props.isOpenSignIn}
              currentUser={this.props.currentUser}
              signUpModalHandler={this.props.signUpModalHandler}
              isOpenSignUp={this.props.isOpenSignUp}
              signInAndOutHandler={this.props.signInAndOutHandler}
            >
              로그인
            </SignHandle>
          </span>
        </nav>
      );
    }
  }
}

export default Nav;
