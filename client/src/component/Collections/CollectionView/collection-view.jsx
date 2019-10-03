import React from 'react';
import CollectionItem from '../CollectionItem/collection-item';
import './collection-view.scss';

export default function CollectionView({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter(index => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
