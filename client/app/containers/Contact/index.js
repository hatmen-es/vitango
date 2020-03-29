/*
 *
 * Contact
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Input';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs } = this.props;

    return (
      <div className='sell'>
        <h1>Contacta con nosotros</h1>
        <hr />
        <Row>
          <Col xs='12' md='6'>
            <Input
              type={'text'}
              label={'Nombre'}
              name={'name'}
              placeholder={'Tu nombre completo'}
              value={contactFormData.name}
              onInputChange={(name, value) => {
                contactFormChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='6'>
            <Input
              type={'text'}
              label={'Correo electrónico'}
              name={'email'}
              placeholder={'example@gmail.com'}
              value={contactFormData.email}
              onInputChange={(name, value) => {
                contactFormChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              label={'Mensaje'}
              name={'message'}
              placeholder={'...'}
              value={contactFormData.message}
              onInputChange={(name, value) => {
                contactFormChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='sell-actions'>
          <button
            className='input-btn'
            type='submit'
            onClick={() => contactUs()}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData
  };
};

export default connect(
  mapStateToProps,
  actions
)(Contact);
