import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import dummyData from './dummy_data/dummy_data';
import Nav from './components/nav';
import Recruit from './components/recurit';
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
        console.log(res.body);
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
  }
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
              <Route path="/recruit" component={Recruit} />
              <Route path="/apply">
                <Apply users={this.state.users} />
              </Route>
              <Route path="/createTeam">
                {this.state.currentUser.isLogin ? (
                  <CreateTeam teams={this.state.users} />
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
