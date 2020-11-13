import React from 'react';
import Article from '../components/article';
import '../styles/main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: null,
    };
  }

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
        <div className="main_container">
          {/* intro_section */}
          <section className="intro_section">
            <div className="intro">흥 신 소</div>
          </section>

          {/* recurite_section */}
          <section className="recurite_section">
            <div className="recurite_title">팀원 모집</div>
            <div className="recurite_articles">
              {this.props.data.teams.slice(0, 6).map((team) => (
                <Article
                  key={team.id}
                  team={team}
                  modalOn={this.modalOn.bind(this)}
                />
              ))}
            </div>
          </section>

          {/* apply_section */}
          <section className="apply_section">
            <div className="apply_title">사람 찾기</div>
            <div className="apply_articles">
              {this.props.data.users.slice(0, 3).map((user) => (
                <Article
                  key={user.id}
                  user={user}
                  modalOn={this.modalOn.bind(this)}
                />
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
      </>
    );
  }
}

export default Main;
