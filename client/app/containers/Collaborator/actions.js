/*
 *
 * Admin actions
 *
 */

import { TOGGLE_COLLABORATOR_MENU } from './constants';

export const toggleCollaboratorMenu = () => {
  return {
    type: TOGGLE_COLLABORATOR_MENU
  };
};
