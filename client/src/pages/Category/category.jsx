import React from 'react';

import CollectionItem from '../../component/Collections/CollectionItem/collection-item';

import { connect } from 'react-redux';
import { selectCollection } from '../../services/redux/shop.selector';

import './category.scss';

const Category = ({ category: { title, items } }) => (
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  category: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(Category);
