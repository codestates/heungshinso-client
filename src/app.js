import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import dummyData from './dummy_data/dummy_data';
import Nav from './components/nav';
import Recruit from './components/recurite';
import Apply from './components/apply';
import Main from './components/main';
import CreateTeam from './components/create_team';
import Profile from './components/profile';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...dummyData.users],
      teams: [...dummyData.teams],
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
  render() {
    return (
      <BrowserRouter>
        <div
          className={
            !this.state.isOpenSignIn && !this.state.isOpenSignUp
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

          <Switch>
            <Route exact path="/" render={() => <Main data={this.state} />} />
            <Route path="/recruit" component={Recruit} />
            <Route path="/apply">
              <Apply users={this.state.users} />
            </Route>
            <Route path="/createTeam">
              {this.state.currentUser.isLogin ? (
                <CreateTeam users={this.state.users} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/profile">
              {this.state.currentUser.isLogin ? (
                <Profile />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
