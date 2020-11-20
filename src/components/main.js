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
      recruitModal: false,
    });
  }

  render() {
    return (
      <>
        {/* intro_section */}
        <section className="intro_section">
          <div className="intro"></div>
        </section>

        {/* recruit_section */}
        <section className="recruit_section">
          <div className="recruit_title">모집</div>
          <div className="recruit_articles">
            {this.props.data.teams.map((team) => (
              <Article
                key={team.id}
                team={team}
                modalOn={this.recruitModalon.bind(this)}
              />
            ))}
          </div>
        </section>

        {/* apply_section */}
        <section className="apply_section">
          <div className="apply_title">찾기</div>
          <div className="apply_articles">
            {this.props.data.users.map((user) => (
              <Article
                key={user.id}
                user={user}
                modalOn={this.applyModalon.bind(this)}
              />
            ))}
          </div>
        </section>

        {/* modal_section */}
        {this.state.applyModal ? (
          <>
            <section className="modal_section">
              <div
                className="modal_overlay"
                onClick={this.modalOff.bind(this)}
              ></div>
              <div className="modal_card">
                <img
                  src={this.state.modalData.url}
                  className="modal_card_img"
                ></img>
                <span className="modal_card_info">
                  <dl>
                    <dt>user</dt>
                    <dd>: {this.state.modalData.username}</dd>
                    <dt>position</dt>
                    <dd>: {this.state.modalData.user_position}</dd>
                    <dt>region</dt>
                    <dd>: {this.state.modalData.user_region}</dd>
                    <dt>status</dt>
                    <dd>: {this.state.modalData.user_status}</dd>
                  </dl>
                </span>
                <div className="modal_card_item">
                  <dt>description</dt>
                  <dd>{this.state.modalData.description}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>carrer</dt>
                  <dd>{this.state.modalData.career}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>prize</dt>
                  <dd>{this.state.modalData.prize}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>portfolio</dt>
                  <dd>{this.state.modalData.portfolio}</dd>
                </div>
              </div>
            </section>
          </>
        ) : null}
        {this.state.recruitModal ? (
          <>
            <section className="modal_section">
              <div
                className="modal_overlay"
                onClick={this.modalOff.bind(this)}
              ></div>
              <div className="modal_card">
                <div className="modal_card_title">
                  {this.state.modalData.title}
                </div>
                <div className="username">작성자: 추노</div>
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

export default Main;
