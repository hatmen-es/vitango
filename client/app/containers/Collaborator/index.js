/*
 *
 * Admin
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import AccountMenu from '../../components/AccountMenu';
import Page404 from '../../components/Page404';

import Account from '../Account';
import Brand from '../Brand';


class Collaborator extends React.PureComponent {
  render() {
    const { isMenuOpen, collaboratorLinks, toggleCollaboratorMenu } = this.props;

    return (
      <div className='admin'>
        <Row>
          <Col xs='12' md='4'>
            <AccountMenu
              isMenuOpen={isMenuOpen}
              accountLinks={collaboratorLinks}
              toggleMenu={toggleCollaboratorMenu}
            />
          </Col>
          <Col xs='12' md='8'>
            <div className='panel-body'>
              <Switch>
                <Route exact path='/dashboard' component={Account} />
                <Route path='/dashboard/brands' component={Brand} />
                <Route path='*' component={Page404} />
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.collaborator.isMenuOpen,
    collaboratorLinks: state.collaborator.collaboratorLinks
  };
};

export default connect(
  mapStateToProps,
  actions
)(Collaborator);
