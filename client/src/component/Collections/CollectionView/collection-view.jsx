import React from 'react';
import CollectionItem from '../CollectionItem/collection-item';
import '../CollectionView/collection-view.scss';

export default function CollectionView({ title, items }) {
  return (
    <div className="collection">
      <h1 className="collection-preview">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}
