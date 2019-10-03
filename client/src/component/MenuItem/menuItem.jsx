import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss';

function MenuItem1({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">BUY</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem1);
