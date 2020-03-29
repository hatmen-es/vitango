/**
 *
 * Dashboard
 *
 */

import React from 'react';

import cookie from 'react-cookies';

import Admin from '../Admin';
import Customer from '../Customer';
import Collaborator from '../Collaborator'

class Dashboard extends React.PureComponent {
  render() {
    const role = cookie.load('role');

    if (role == 'ROLE_MEMBER') {
      return <Customer />;
    } else if (role == 'ROLE_COLLABORATOR') {
      return <Collaborator />;
    } else {
      return <Admin />;
    }
  }
}

export default Dashboard;
