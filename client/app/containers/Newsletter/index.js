/*
 *
 * Newsletter
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import Input from '../../components/Input';

class Newsletter extends React.PureComponent {
  render() {
    const { email, newsletterChange, subscribe } = this.props;

    const subscribeButton = (
      <button className='input-btn' type='submit' onClick={subscribe}>
        subscribe
      </button>
    );

    return (
      <div className='newsletter-form'>
        <p>No disponible por el momento</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.newsletter.email
  };
};

export default connect(
  mapStateToProps,
  actions
)(Newsletter);
