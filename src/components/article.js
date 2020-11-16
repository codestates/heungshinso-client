import React from 'react';

const Article = (props) => (
  <>
    {props.team ? (
      <>
        <div className="recruit_card">
          <button className="modal_bt" onClick={() => props.modalOn(props.team)}>MORE VIEW</button>
          <div className="title">{props.team.title}</div>
          <div className="username">작성자 {props.username}</div>
          <div className="description">{props.team.description}</div>
          <div className="position">{props.team.team_position}</div>
          <div className="region">{props.team.team_region}</div>
        </div>
      </>
    ) : (
        <>
          <div className="apply_card" onClick={() => props.modalOn(props.user)}>
            <div className="username">{props.user.username}</div>
            <div className="position">{props.user.user_position}</div>
            <div className="region">{props.user.user_region}</div>
            <div className="status">{props.user.user_status}</div>
          </div>
        </>
      )}
  </>
);

export default Article;
