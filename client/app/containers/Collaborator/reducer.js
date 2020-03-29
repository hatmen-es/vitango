/*
 *
 * Admin reducer
 *
 */

import { TOGGLE_ADMIN_MENU } from './constants';

const initialState = {
  isMenuOpen: false,
  collaboratorLinks: [
    { to: '', name: 'detalles de la cuenta' },
    { to: '/brands', name: 'gestionar comercios' },
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
