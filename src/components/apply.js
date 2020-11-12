import React from 'react';
import Article from '../components/article'

class Apply extends React.Component {
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
        <div className="apply_container">
          {/* filter_section */}
          < section className="filter_section">
            <div className="filter">
              <span className="ft_ic"></span>
              <span className="ft_region">
                지역
            {/* <span className="ft_arrow_down_ic"></span> */}
                {/* <ul>
              </ul> */}
              </span>
              <span className="ft_position">직무</span>
              <span className="ft_state">상태</span>
              {/* { 필터 아이템이 몇 개 이상 되면 오버 레이아웃으로 이동 */}
              <span className="ft_items">
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
              </span>
              <span className="ft_items_over">

              </span>
            </div>
          </section>

          {/* apply_section */}
          <section className="apply__section">
            <div className="apply_articles">
              {this.props.users.map(user => (
                <Article key={user.id} user={user} modalOn={this.modalOn.bind(this)} />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? <>
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
      </>
    )
  }
}

export default Apply
