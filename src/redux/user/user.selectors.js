import { createSelector } from 'reselect';
import {selectCart} from '../../redux/cart/cart.selectors'
const selectUser = state => state.user;
export const selectCurrentUser = createSelector ( [selectUser] , user => user.currentUser);
export const selectionCartHidden = createSelector ([selectCart] , cart => cart.hidden );