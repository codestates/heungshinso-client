import React from 'react';
import Article from '../components/article';
import '../styles/main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyModal: false,
      recruitModal: false,
      modalData: null,
    };
  }

  recruitModalon(modal) {
    this.setState({ recruitModal: true });
    this.setState({ modalData: modal });
  }

  applyModalon(modal) {
    this.setState({ applyModal: true });
    this.setState({ modalData: modal });
  }

  modalOff() {
    this.setState({
      applyModal: false,
      recruitModal: false
    })
  }

  render() {
    return (
      <>
        <div className="main_container">
          {/* intro_section */}
          <section className="intro_section">
            <div className="intro">흥 신 소</div>
          </section>

          {/* recruit_section */}
          <section className="recruit_section">
            <div className="recruit_title">팀원 모집</div>
            <div className="recruit_articles">
              {this.props.data.teams.slice(0, 6).map((team) => (
                <Article key={team.id} team={team} modalOn={this.recruitModalon.bind(this)} />
              ))}
            </div>
          </section>

          {/* apply_section */}
          <section className="apply_section">
            <div className="apply_title">사람 찾기</div>
            <div className="apply_articles">
              {this.props.data.users.slice(0, 3).map((user) => (
                <Article key={user.id} user={user} modalOn={this.applyModalon.bind(this)} />
              ))}
            </div>
          </section>

          {/* footer */}
          <footer className="footer">
            <div className="team">
              <div className="member">김면수</div>
              <div className="member">유병국</div>
              <div className="member">임경섭</div>
              <div className="member">장수민</div>
            </div>
          </footer>
        </div>

        {/* modal_section */}
        {this.state.applyModal ? <>
          <section className="modal_section">
            <div className="modal_overlay" onClick={this.modalOff.bind(this)}></div>
            <div className="modal_card">
              <div className="username">{this.state.modalData.username}</div>
              <div className="position">{this.state.modalData.user_position}</div>
              <div className="region">{this.state.modalData.user_region}</div>
              <div className="status">{this.state.modalData.user_status}</div>
            </div>
          </section>
        </> : null}
        {this.state.recruitModal ? <>
          <section className="modal_section">
            <div className="modal_overlay" onClick={this.modalOff.bind(this)}></div>
            <div className="modal_card">
              <div className="title">{this.state.modalData.title}</div>
              <div className="username">작성자: 추노</div>
              <div className="description">{this.state.modalData.description}</div>
              <div className="position">{this.state.modalData.team_position}</div>
              <div className="region">{this.state.modalData.team_region}</div>
            </div>
          </section>
        </> : null}
      </>
    );
  }
}

export default Main;
