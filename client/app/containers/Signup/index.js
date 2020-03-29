/*
 *
 * Signup
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import actions from '../../actions';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';

class Signup extends React.PureComponent {
  render() {
    const {
      authenticated,
      signupFormData,
      isLoading,
      signupChange,
      signUp,
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    return (
      <div className='signup-form'>
        {isLoading && (
          <div>
            <LoadingIndicator />
            <div className='popup-background' />
          </div>
        )}
        <h1>Nueva cuenta</h1>
        <hr />
        <Row>
          <Col xs='12' md='6' className='col-no-padding'>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Email'}
                name={'email'}
                placeholder={'Introduce tu correo electrónico'}
                value={signupFormData.email}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Nombre'}
                name={'firstName'}
                placeholder={'Introduce tu nombre'}
                value={signupFormData.firstName}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Apellidos'}
                name={'lastName'}
                placeholder={'Introduce apellidos'}
                value={signupFormData.lastName}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'password'}
                label={'Contraseña'}
                name={'password'}
                placeholder={'Introduce contraseña'}
                value={signupFormData.password}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
          </Col>
        </Row>
        <hr />
        <div className='login-actions'>
          <button className='input-btn' type='submit' onClick={() => signUp()}>
            Registrar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    signupFormData: state.signup.signupFormData,
    isLoading: state.signup.isLoading,
    isSubscribed: state.signup.isSubscribed
  };
};

export default connect(
  mapStateToProps,
  actions
)(Signup);
