/*
 *
 * Admin reducer
 *
 */

import { TOGGLE_ADMIN_MENU } from './constants';

const initialState = {
  isMenuOpen: false,
  adminLinks: [
    { to: '', name: 'detalles de la cuenta' },
    { to: '/products', name: 'gestionar productos' },
    { to: '/categories', name: 'gestionar categorias' },
    { to: '/brands', name: 'gestionar comercios' },
    { to: '/users', name: 'gestrionar usuarios' },
    { to: '/merchants', name: 'gertionar comerciantes' }
  ]
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADMIN_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export default adminReducer;
