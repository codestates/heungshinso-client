import React from 'react';
import Article from '../components/article';

class Recruit extends React.Component {
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
        <div className="recruit_container">
          {/* filter_section */}
          <section className="filter_section">
            <div className="filter">
              <span className="ft_ic"></span>
              <span className="ft_region">
                <label>지역</label>
                <select>
                  <option value="모두">모두</option>
                  <option value="서울광역시">서울광역시</option>
                  <option value="부산광역시">부산광역시</option>
                  <option value="대구광역시">대구광역시</option>
                  <option value="인천광역시">인천광역시</option>
                  <option value="광주광역시">광주광역시</option>
                  <option value="대전광역시">대전광역시</option>
                  <option value="울산광역시">울산광역시</option>
                </select>
              </span>
              <span className="ft_position">
                <label>직무</label>
                <select>
                  <option value="모두">모두</option>
                  <option value="개발자">개발자</option>
                  <option value="기획자">기획자</option>
                  <option value="디자이너">디자이너</option>
                  <option value="기타">기타</option>
                </select>
              </span>
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

          {/* recruit_section */}
          <section className="recruit__section">
            <div className="recruit_articles">
              {this.props.teams.map((team) => (
                <Article
                  key={team.id}
                  team={team}
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

export default Recruit;
