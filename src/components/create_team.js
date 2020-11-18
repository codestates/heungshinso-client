import { Component } from "react";
import { withRouter } from "react-router-dom";
import "../styles/createteam.css";

class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      title: "",
      description: "",
      team_region: "",
      team_position: "",
    };
    console.log(this.state);
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
      this.setState({ errorMessage: "모든 항목을 입력해주세요." });
      return;
    }

    let teams = this.props.teams;
    let users = this.props.users;
    let currentUser = this.props.currentUserData;
    if (teams.filter((team) => team.userId === currentUser.id).length !== 0) {
      this.setState({ errorMessage: "이미 생성한 팀이 있습니다." });
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

    const url = "http://localhost:3001/team/createteam";

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        this.setState({ errorMessage: "" });
        this.props.history.push("/");
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    return (
      <div id="createteam_wapper">
        <div id="contents_section">
          <div id="title">함께할 팀원을 구하십니까?</div>
          <div id="setting_contents">
            <div>
              <span className="st_name">프로젝트 한줄 설명{": "}</span>
              <span className="st_team_name">
                <input
                  className="input_box"
                  name="title"
                  type="text"
                  placeholder="ex) 스타트업 소비자 관리 플랫폼"
                  value={this.state.title}
                  onChange={this.handleInputValue}
                ></input>
              </span>
            </div>
            <div>
              <span className="st_name">설명{": "}</span>
              <textarea
                className="input_box"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputValue}
              ></textarea>
            </div>
            <div>
              <span className="st_name">활동 위치{": "}</span>
              <select
                className="input_box"
                type="text"
                name="team_region"
                value={this.state.team_region}
                onChange={this.handleInputValue}
              >
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="세종시">세종시</option>
                <option value="경기도">경기도</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="제주시">제주시</option>
              </select>
            </div>
            <div>
              <span className="st_name">구인 직무{": "}</span>
              <select
                className="input_box"
                type="text"
                name="team_position"
                value={this.state.team_position}
                onChange={this.handleInputValue}
              >
                <option value="Front-End">프론트엔드</option>
                <option value="Back-End">백엔드</option>
                <option value="Full-Stack">풀스텍</option>
                <option value="Designer">디자이너</option>
              </select>
            </div>
            <div className="input_error_message">{this.state.errorMessage}</div>
            <div id="btn" onClick={this.handleTeamValue.bind(this)}>
              <span>팀 만들기</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateTeam);
