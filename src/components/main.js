import React from 'react';
import Article from '../components/article'
import '../styles/main.css';

const Main = (props) => (
  <div className="main_container">
    {/* intro_section */}
    <section className="intro_section">
      <div className="intro">
        흥 신 소
      </div>
    </section>

    {/* recurite_section */}
    <section className="recurite_section">
      <div className="recurite_title">
        팀원 모집
      </div>
      <div className="recurite_article">
        {props.data.teams.slice(0, 6).map(team => (
          <Article key={team.id} team={team} />
        ))}
      </div>
    </section>

    {/* aplly_section */}
    <section className="aplly_section">
      <div className="recurite_title">
        사람 찾기
      </div>
      <div className="recurite_article">
        {props.data.users.slice(0, 6).map(user => (
          <Article key={user.id} user={user} />
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
)

export default Main