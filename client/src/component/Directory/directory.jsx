import React from 'react';
import MenuItem from '../MenuItem/menuItem';

import { connect } from 'react-redux';
import { selectDirectorySection } from '../../services/redux/directory.selector';
import { createStructuredSelector } from 'reselect';

import './directory.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, id }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
