/**
 *
 * Navigation
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import { Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Menu from '../NavigationMenu';

class Navigation extends React.PureComponent {
  render() {
    const {
      authenticated,
      user,
      signOut,
      isMenuOpen,
      toggleMenu
    } = this.props;

    return (
      <header className='header fixed-mobile-header'>
        <div className='header-info'>
          <Container>
            <Row>
              <Col
                xs='4'
                md='4'
                className='text-center info-col d-none d-sm-block'
              >
                <i className='fa fa-truck' />
                <span>Sin desplazamientos</span>
              </Col>
              <Col
                xs='4'
                md='4'
                className='text-center info-col d-none d-sm-block'
              >
                <i className='fa fa-credit-card' />
                <span>Sin comisiones</span>
              </Col>
              <Col
                xs='4'
                md='4'
                className='text-center info-col d-none d-sm-block'
              >
                <i className='fa fa-phone' />
                <span>Contacta en admin@hatmen.es</span>
              </Col>
              <Col xs='12' className='text-center d-block d-sm-none'>
                <i className='fa fa-phone' />
                <span> Contacta en admin@hatmen.es</span>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className='top-header'>
            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 3, order: 1 }}
              lg={{ size: 3, order: 1 }}
            >
              <div className='brand'>
                <span className='bars-icon fa fa-bars' onClick={toggleMenu} />
                <Link to='/'>
                  <h1>Tu Comercio</h1>
                </Link>
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 5, order: 1 }}
              lg={{ size: 6, order: 3 }}
              className='col-no-padding'
            >
              <div className='header-links'>
                <span className='bars-icon fa fa-bars' onClick={toggleMenu} />
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 4, order: 1 }}
              lg={{ size: 3, order: 3 }}
            >
              <Navbar color='light' light expand='md'>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to='/brands'>
                      Comercios
                    </NavLink>
                  </NavItem>
                  {authenticated ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {Object.keys(user).length == 0
                          ? 'Administración'
                          : user.profile.firstName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link to={'/dashboard'}>Dashboard</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <span className='log-out' onClick={signOut}>
                            Log Out
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Administración
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link to={'/login'}>Login</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to={'/register'}>SignUp</Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* hidden menu drawer */}
        <div className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}>
          <div className='mini-menu'>
            <Menu />
          </div>
          <div
            className={isMenuOpen ? 'dark-overflow' : ''}
            onClick={toggleMenu}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    authenticated: state.authentication.authenticated,
    user: state.account.user
  };
};

export default connect(
  mapStateToProps,
  actions
)(Navigation);
