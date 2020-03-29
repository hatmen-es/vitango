/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
import applicationReducer from './containers/Application/reducer';
import homepageReducer from './containers/Homepage/reducer';
import signupReducer from './containers/Signup/reducer';
import loginReducer from './containers/Login/reducer';
import navigationReducer from './containers/Navigation/reducer';
import authenticationReducer from './containers/Authentication/reducer';
import newsletterReducer from './containers/Newsletter/reducer';
import customerReducer from './containers/Customer/reducer';
import adminReducer from './containers/Admin/reducer';
import collaboratorReducer from './containers/Collaborator/reducer';
import accountReducer from './containers/Account/reducer';
import usersReducer from './containers/Users/reducer';
import productReducer from './containers/Product/reducer';
import categoryReducer from './containers/Category/reducer';
import brandReducer from './containers/Brand/reducer';
import navigationMenuReducer from './containers/NavigationMenu/reducer';
import contactReducer from './containers/Contact/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    applicaiton: applicationReducer,
    homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    navigation: navigationReducer,
    authentication: authenticationReducer,
    newsletter: newsletterReducer,
    customer: customerReducer,
    admin: adminReducer,
    collaborator: collaboratorReducer,
    account: accountReducer,
    users: usersReducer,
    product: productReducer,
    category: categoryReducer,
    brand: brandReducer,
    menu: navigationMenuReducer,
    contact: contactReducer
  });

export default createReducer;
