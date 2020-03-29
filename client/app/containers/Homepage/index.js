/**
 *
 * Homepage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

class Homepage extends React.PureComponent {
  componentDidMount() {}

  // TODO: include catalog, searchbox and filters
  render() {
    return <h1>Por el Comercio Local</h1>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(Homepage);
