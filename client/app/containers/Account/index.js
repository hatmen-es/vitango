/*
 *
 * Account
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import cookie from 'react-cookies';

import actions from '../../actions';

import AccountDetails from '../../components/AccountDetails';
import SubPage from '../../components/SubPage';

class Account extends React.PureComponent {
  componentDidMount() {
    const userId = cookie.load('user');

    if (!this.props.user._id) {
      this.props.fetchProfile(userId);
    }
  }

  render() {
    const {
      profile,
      user,
      accountChange,
      updateProfile,
    } = this.props;

    return (
      <div className='account'>
        <SubPage title={'Account Page'} isMenuOpen={null} />
        <div className='info'>
          <p>{user.email}</p>
          {user.role !== 'ROLE_MEMBER' && <span>Admin</span>}
          {profile.is_subscribed && <span>Subscribed</span>}
        </div>
        <AccountDetails
          profile={profile}
          user={user}
          accountChange={accountChange}
          updateProfile={updateProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.account.profile,
    user: state.account.user,
    isFormOpen: state.account.isFormOpen,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Account);
