import React from 'react';
import './menuItem.scss';

function MenuItem1({ title, imageUrl }) {
  return (
    <div className="menu-item">        
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

export default MenuItem1;
