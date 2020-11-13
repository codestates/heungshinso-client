import React from 'react';

const Article = (props) => (
  <>
    {props.team ? (
      <>
        <div className="recurite_card">
          <div>{props.team.title}</div>
          <div>{props.team.description}</div>
          <div>{props.team.team_position}</div>
          <div>{props.team.team_region}</div>
        </div>
      </>
    ) : (
      <>
        <div className="recurite_card">
          <div>{props.user.username}</div>
          <div>{props.user.user_position}</div>
          <div>{props.user.user_region}</div>
          <div>{props.user.user_status}</div>
        </div>
      </>
    )}
  </>
);

export default Article;
