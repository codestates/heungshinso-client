import { Component } from 'react';
import SignHandle from './nav/signhandle';
import { NavLink, withRouter } from 'react-router-dom';
import '../styles/nav.css';
import axios from "axios";

class Nav extends Component {
  handleSignOut = () => {
    this.props.signInAndOutHandler();
    this.props.history.push('/');
    localStorage.removeItem('currentUser');
    const url = 'http://localhost:3000/users/signout';
    // fetch(url, {
    //   method: 'POST',
    //   credentials: 'include',
    //   mode: 'cors',
    // })
    axios({
      method: 'post',
      url: 'http://localhost:3000/users/signout',
      withCredentials: true
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
        <nav className="nav_container">
          <div className="nav_main">
            <NavLink exact to="/" className="nav_main_a">
              흥신소
            </NavLink>
          </div>
          <div className="nav_page">
            <NavLink
              to="/recruit"
              activeClassName="active"
              className="nav_page_item"
            >
              모집
            </NavLink>

            <NavLink
              to="/apply"
              activeClassName="active"
              className="nav_page_item"
            >
              찾기
            </NavLink>

            <NavLink
              to="/createTeam"
              activeClassName="active"
              className="nav_page_item"
            >
              팀생성
            </NavLink>

            <NavLink
              className="nav_page_item"
              to="/profile"
              activeClassName="active"
            >
              프로필
            </NavLink>
            <div className="nav_page_div">ㅣ</div>
            <span
              className="nav_page_item"
              onClick={() => {
                this.handleSignOut();
              }}
            >
              로그아웃
            </span>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="nav_container">
          <div className="nav_main">
            <NavLink exact to="/" className="nav_main_a">
              흥신소
            </NavLink>
          </div>
          <div className="nav_page">
            <NavLink
              to="/recruit"
              activeClassName="active"
              className="nav_page_item"
            >
              모집
            </NavLink>

            <NavLink
              to="/apply"
              activeClassName="active"
              className="nav_page_item"
            >
              찾기
            </NavLink>

            <NavLink
              to="/createTeam"
              activeClassName="active"
              className="nav_page_item"
            >
              <div onClick={this.props.signInModalHandler}>팀생성</div>
            </NavLink>
            <div className="nav_page_div">ㅣ</div>
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
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Nav);
