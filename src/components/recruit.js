import React from 'react';

import Article from './article'


class Recruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modalData: null
    }
  }

  modalOn(modal) {
    this.setState({ modal: true })
    this.setState({ modalData: modal })
  }

  modalOff() {
    this.setState({ modal: false })
  }

  render() {
    return (
      <>
        <div className="recruit_container">
          {/* filter_section */}
          <section className="filter_section">

          </section>

          {/* recruit_section */}
          <section className="recruit__section">
            <div className="recruit_articles">
              {this.props.teams.map(team => (
                <Article key={team.id} team={team} modalOn={this.modalOn.bind(this)} />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? <>
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
    )
  }
}

export default Recruit