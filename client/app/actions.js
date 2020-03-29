/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as homepage from './containers/Homepage/actions';
import * as signup from './containers/Signup/actions';
import * as login from './containers/Login/actions';
import * as navigation from './containers/Navigation/actions';
import * as newsletter from './containers/Newsletter/actions';
import * as customer from './containers/Customer/actions';
import * as admin from './containers/Admin/actions';
import * as account from './containers/Account/actions';
import * as users from './containers/Users/actions';
import * as product from './containers/Product/actions';
import * as category from './containers/Category/actions';
import * as brand from './containers/Brand/actions';
import * as menu from './containers/NavigationMenu/actions';
import * as contact from './containers/Contact/actions';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...application,
      ...homepage,
      ...signup,
      ...login,
      ...navigation,
      ...newsletter,
      ...customer,
      ...admin,
      ...account,
      ...users,
      ...product,
      ...category,
      ...brand,
      ...menu,
      ...contact
    },
    dispatch
  );
}
