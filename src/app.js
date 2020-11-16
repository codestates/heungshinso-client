import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import dummyData from './dummy_data/dummy_data';
import Nav from './components/nav';
import Recruit from './components/recruit';
import Apply from './components/apply';
import Main from './components/main';
import CreateTeam from './components/create_team';
import Profile from './components/profile';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...dummyData.user],
      teams: [...dummyData.team],
      currentUser: { isLogin: false, userData: null },
      isOpenSignIn: false,
      isOpenSignUp: false,
      isOpenProfileChange: false,
    };
  }
  signInModalHandler() {
    this.setState((prestate) => ({ isOpenSignIn: !prestate.isOpenSignIn }));
  }
  signUpModalHandler() {
    this.setState((prestate) => ({ isOpenSignUp: !prestate.isOpenSignUp }));
  }
  profileChangeModalHandler() {
    this.setState((prestate) => ({
      isOpenProfileChange: !prestate.isOpenProfileChange,
    }));
  }
  signInAndOutHandler(userData) {
    this.setState((prestate) => ({
      currentUser: {
        isLogin: !prestate.currentUser.isLogin,
        userData: userData,
      },
    }));
  }
  changeCurrentUserHandler(userData) {
    this.setState((prestate) => ({
      currentUser: {
        isLogin: prestate.isLogin,
        userData: { ...prestate.userData, ...userData },
      },
    }));
  }
  componentDidMount() {
    const url = 'http://3.35.21.164:3000/';
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({ user: body.user });
        this.setState({ team: body.team });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // componentDidUpdate() {
  //   const query = window.location.search.substring(1);
  //   const token = query.split('access_Token=')[1];
  //   // GitHub API를 통해 사용자 정보를 받아올 수 있습니다
  //   fetch('//api.github.com/user', {
  //     headers: {
  //       method: 'GET',
  //       mode: 'cors',
  //       // 이와 같이 Authorization 헤더에 `token ${token}`과 같이
  //       // 인증 코드를 전송하는 형태를 가리켜 Bearer Token 인증이라고 합니다
  //       Authorization: 'token ' + token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       // 이 응답에 대한 문서는 GitHub 공식 문서를 참조하세요
  //       // https://developer.github.com/v3/users/#get-the-authenticated-user

  //       document.body.innerText = `${res.name}님 환영합니다!`;
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <BrowserRouter>
        <div
          id={
            !this.state.isOpenSignIn &&
            !this.state.isOpenSignUp &&
            !this.state.isOpenProfileChange
              ? 'hidden-modal'
              : 'show-modal'
          }
        >
          <div>
            <Nav
              isOpenSignIn={this.state.isOpenSignIn}
              signInModalHandler={this.signInModalHandler.bind(this)}
              isOpenSignUp={this.state.isOpenSignUp}
              signUpModalHandler={this.signUpModalHandler.bind(this)}
              signInAndOutHandler={this.signInAndOutHandler.bind(this)}
              currentUser={this.state.currentUser}
            />
          </div>
          <hr />
          <div
            id="modal-handler"
            onClick={
              this.state.isOpenSignIn
                ? this.signInModalHandler.bind(this)
                : this.state.isOpenSignUp
                ? this.signUpModalHandler.bind(this)
                : () => {}
            }
          >
            <Switch>
              <Route exact path="/">
                <Main data={this.state}></Main>
              </Route>
              <Route path="/recruit">
                {' '}
                <Recruit users={this.state.users} teams={this.state.teams} />
              </Route>
              <Route path="/apply">
                <Apply users={this.state.users} />
              </Route>
              <Route path="/createTeam">
                {this.state.currentUser.isLogin ? (
                  <CreateTeam
                    users={this.state.teams}
                    teams={this.state.users}
                    currentUserData={this.state.currentUser.userData}
                  />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path="/profile">
                {this.state.currentUser.isLogin ? (
                  <Profile
                    profileChangeModalHandler={this.profileChangeModalHandler.bind(
                      this
                    )}
                    isOpenProfileChange={this.state.isOpenProfileChange}
                    changeCurrentUserHandler={this.changeCurrentUserHandler.bind(
                      this
                    )}
                    currentUserData={this.state.currentUser.userData}
                  />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
