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
      users: [
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
        ...dummyData.user,
      ],
      teams: [
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
        ...dummyData.team,
      ],
      currentUser: { isLogin: false, userData: null },
      isOpenSignIn: false,
      isOpenSignUp: false,
    };
  }
  signInModalHandler() {
    this.setState((prestate) => ({ isOpenSignIn: !prestate.isOpenSignIn }));
  }
  signUpModalHandler() {
    this.setState((prestate) => ({ isOpenSignUp: !prestate.isOpenSignUp }));
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
        isLogin: prestate.currentUser.isLogin,
        userData: { ...prestate.currentUser.userData, ...userData },
      },
    }));
  }
  componentDidMount() {
    if (localStorage.getItem('currentUser')) {
      let userdata = localStorage.getItem('currentUser');
      this.signInAndOutHandler(JSON.parse(userdata));
    }
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
        console.log(body);
        this.setState({ user: body.user });
        this.setState({ team: body.team });
      })
      .catch((err) => {
        console.log(err);
      });

    // github login
    const query = window.location.search.substring(1);
    if (query.split('=')[0] === 'access_Token') {
      const token = query.split('access_Token=')[1];
      // GitHub API를 통해 사용자 정보를 받아올 수 있습니다
      fetch('//api.github.com/user', {
        headers: {
          method: 'GET',
          mode: 'cors',
          // 이와 같이 Authorization 헤더에 `token ${token}`과 같이
          // 인증 코드를 전송하는 형태를 가리켜 Bearer Token 인증이라고 합니다
          Authorization: 'token ' + token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.signInAndOutHandler(dummyData.user[0]);
        })
        .catch((err) => console.log(err));
    }
    // // naver login
    if (window.location.href.indexOf('?naverlogin') !== -1) {
      fetch('http://3.35.21.164:3000/users/naverlogin')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let body = {
            id: res.response.id,
            email: res.response.email,
            gender: res.response.gender,
            username: res.response.profile.nickname,
            phone_number: null,
            birthday: null,
            user_region: null,
            user_position: null,
            user_status: null,
          };
          this.signInAndOutHandler(body);
        });
    }

    // kakao login
    if (window.location.href.indexOf('?kakaologin') !== -1) {
      fetch('http://3.35.21.164:3000/users/kakaologin')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let body = {
            id: res.id,
            email: res.response.email,
            gender: res.response.gender,
            username: res.response.profile.nickname,
            phone_number: null,
            birthday: null,
            user_region: null,
            user_position: null,
            user_status: null,
          };
          this.signInAndOutHandler(body);
        });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app_container">
          <div className="app_navigation">
            <Nav
              isOpenSignIn={this.state.isOpenSignIn}
              signInModalHandler={this.signInModalHandler.bind(this)}
              isOpenSignUp={this.state.isOpenSignUp}
              signUpModalHandler={this.signUpModalHandler.bind(this)}
              signInAndOutHandler={this.signInAndOutHandler.bind(this)}
              currentUser={this.state.currentUser}
            />
          </div>

          <div className="app_main">
            <Switch>
              <Route exact path="/">
                <Main data={this.state}></Main>
              </Route>
              <Route path="/recruit">
                <Recruit
                  users={this.state.users}
                  teams={this.state.teams}
                  currentUserData={this.state.currentUser.userData}
                />
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
          <footer className="footer">
            <div className="team">
              <span className="member">김면수</span>
              <span className="member">유병국</span>
              <span className="member">임경섭</span>
              <span className="member">장수민</span>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
