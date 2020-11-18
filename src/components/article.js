import React from 'react';

const Article = (props) => (
  <>
    {props.team ? (
      <>
        <div className="recruit_card">
          <div className="recruit_card_img" onClick={() => props.modalOn(props.team)}></div>
          <div className="recruit_card_nav">
            <div className="recruit_card_title">
              <div className="title">{props.team.title}</div>
            </div>
            <div className="recruit_card_info">
              <dl>
                <dt>user</dt><dd>: 닉네임{props.team.username}</dd>
                <dt>position</dt><dd>: {props.team.team_position}</dd>
                <dt>region</dt><dd>: {props.team.team_region}</dd>
                <dt>date</dt><dd className="date">: 날짜</dd>
                {/* <dt>description</dt><dd>{props.team.description}</dd> */}
              </dl>
            </div>
          </div>
        </div>
      </>
    ) : (
        <>
          <div className="apply_card" onClick={() => props.modalOn(props.user)}>
            <span className="apply_card_img"></span>
            <span className="apply_card_info">
              <dl>
                <dt>user</dt><dd>: {props.user.username}</dd>
                <dt>position</dt><dd>: {props.user.user_position}</dd>
                <dt>region</dt><dd>: {props.user.user_region}</dd>
                <dt>status</dt><dd>: {props.user.user_status}</dd>
              </dl>
            </span>
            <div className="apply_card_desc">{props.user.description}</div>
          </div>
        </>
      )}
  </>
);

export default Article;