import React from 'react';
import Article from './article';

class Recruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: null,
      team_region: '모두',
      team_position: '모두',
      filteredTeam: this.props.teams,
    };
  }
  handleFilterRegion = (e) => {
    this.setState({ team_region: e.target.value });
  };
  handleFilterPosition = (e) => {
    this.setState({ team_position: e.target.value });
  };
  handleFilter = () => {
    if (
      this.state.team_region !== '모두' &&
      this.state.team_position !== '모두'
    ) {
      this.setState({
        filteredTeam: this.props.teams
          .filter((team) => team.team_region === this.state.team_region)
          .filter((team) => team.team_position === this.state.team_position),
      });
      return;
    } else if (
      this.state.team_region === '모두' &&
      this.state.team_position !== '모두'
    ) {
      this.setState({
        filteredTeam: this.props.teams.filter(
          (team) => team.team_position === this.state.team_position
        ),
      });
      return;
    } else if (
      this.state.team_region !== '모두' &&
      this.state.team_position === '모두'
    ) {
      this.setState({
        filteredTeam: this.props.teams.filter(
          (team) => team.team_region === this.state.team_region
        ),
      });
      return;
    } else {
      this.setState({ filteredTeam: this.props.teams });
    }
  };
  modalOn(modal) {
    this.setState({ modal: true });
    this.setState({ modalData: modal });
  }

  modalOff() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <>
        <div className="recurite_container">
          {/* filter_section */}
          <section className="filter_section">
            <div className="filter">
              <span className="ft_ic"></span>
              <label htmlFor="ft_region">지역</label>
              <select
                value={this.state.team_region}
                className="ft_region"
                onChange={(e) => {
                  this.handleFilterRegion(e);
                }}
              >
                <option value="모두">모두</option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="울산광역시">울산광역시</option>
              </select>
              {/* <span className="ft_arrow_down_ic"></span>
              <ul>
              </ul> */}

              <label htmlFor="ft_position">직무</label>
              <select
                className="ft_position"
                onChange={(e) => {
                  this.handleFilterPosition(e);
                }}
              >
                <option value="모두">모두</option>
                <option value="개발자">개발자</option>
                <option value="디자이너">디자이너</option>
                <option value="기획자">기획자</option>
                <option value="기타">기타</option>
              </select>
              <button onClick={this.handleFilter.bind(this)}>검색</button>
              {/* { 필터 아이템이 몇 개 이상 되면 오버 레이아웃으로 이동 */}
              <span className="ft_items">
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
              </span>
              <span className="ft_items_over"></span>
            </div>
          </section>

          {/* recurite_section */}
          <section className="recurite__section">
            <div className="recurite_articles">
              {this.state.filteredTeam.map((team) => (
                <Article
                  key={team.id}
                  team={team}
                  username={
                    this.props.users.filter(
                      (user) => user.id === team.userId
                    )[0].username
                  }
                  modalOn={this.modalOn.bind(this)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? (
          <>
            <section className="modal_section">
              <div
                className="modal_overlay"
                onClick={this.modalOff.bind(this)}
              ></div>
              <div className="modal_card">
                <div className="title">{this.state.modalData.title}</div>
                <div className="username">
                  작성자{' '}
                  {
                    this.props.users.filter(
                      (user) => user.id === this.state.modalData.userId
                    )[0].username
                  }
                </div>
                <div className="description">
                  {this.state.modalData.description}
                </div>
                <div className="position">
                  {this.state.modalData.team_position}
                </div>
                <div className="region">{this.state.modalData.team_region}</div>
              </div>
            </section>
          </>
        ) : null}
      </>
    );
  }
}

export default Recruit;
