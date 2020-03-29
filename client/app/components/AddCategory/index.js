/**
 *
 * AddCategory
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../Input';
import SelectOption from '../SelectOption';

const AddCategory = props => {
  const {
    categoryFormData,
    categoryChange,
    addCategory,
    products,
    selectedProducts,
    productSelect
  } = props;

  return (
    <div className='add-category'>
      <Row>
        <Col xs='12' md='6'>
          <Input
            type={'text'}
            label={'Nombre'}
            name={'name'}
            placeholder={'Nombre'}
            value={categoryFormData.name}
            onInputChange={(name, value) => {
              categoryChange(name, value);
            }}
          />
        </Col>
        <Col xs='12' md='12'>
          <Input
            type={'textarea'}
            label={'Localización'}
            name={'description'}
            placeholder={'Nombre y provincia'}
            value={categoryFormData.description}
            onInputChange={(name, value) => {
              categoryChange(name, value);
            }}
          />
        </Col>
        <Col xs='12' md='12'>
          <SelectOption
            label={'Selecciona negocios'}
            multi={true}
            options={products}
            value={selectedProducts}
            handleSelectChange={value => {
              productSelect(value);
            }}
          />
        </Col>
      </Row>
      <hr />
      <div className='add-category-actions'>
        <button
          className='input-btn'
          type='submit'
          onClick={() => addCategory()}
        >
          Añadir Municipio
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
