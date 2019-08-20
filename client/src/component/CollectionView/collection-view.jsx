import React from 'react';

export default function CollectionView({ title, items }) {
  return (
    <div className="collection">
      <h1 className="collection-preview">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}
