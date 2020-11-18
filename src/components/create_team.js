import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      title: '',
      description: '',
      team_region: '',
      team_position: '',
    };
  }
  handleInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleTeamValue = () => {
    if (
      !this.state.title ||
      !this.state.description ||
      !this.state.team_region ||
      !this.state.team_position
    ) {
      this.setState({ errorMessage: '모든 항목을 입력해주세요.' });
      return;
    }

    let teams = this.props.teams;
    let users = this.props.users;
    let currentUser = this.props.currentUserData;
    if (teams.filter((team) => team.userId === currentUser.id).length !== 0) {
      this.setState({ errorMessage: '이미 생성한 팀이 있습니다.' });
      return;
    }

    let body = {
      title: this.state.title,
      description: this.state.description,
      team_position: this.state.team_position,
      team_region: this.state.team_region,
      userId: this.props.currentUserData.id,
    };
    const url = 'http://localhost:3000/team/createteam';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        this.setState({ errorMessage: '' });
        this.props.history.push('/');
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    return (
      <div id="profile_change">
        <div>
          제목{' '}
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputValue}
          ></input>
        </div>
        <div>
          설명{' '}
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputValue}
          ></input>
        </div>
        <div>
          장소{' '}
          <input
            type="text"
            name="team_region"
            value={this.state.team_region}
            onChange={this.handleInputValue}
          ></input>
        </div>
        <div>
          구인 직무{' '}
          <input
            type="text"
            name="team_position"
            value={this.state.team_position}
            onChange={this.handleInputValue}
          ></input>
        </div>

        <div>{this.state.errorMessage}</div>
        <div onClick={this.handleTeamValue.bind(this)}>생성</div>
      </div>
    );
  }
}

export default withRouter(CreateTeam);
