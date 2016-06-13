import { categoryActions } from 'ActionTypes';
import state from '../../recipes.json';

var initialState = Object.assign({}, state, {
  // this key is specific to this app and not part of the canonical data store
  activeCategoryId: null
});

const category = (state = initialState, action) => {
  switch (action.type) {
    case categoryActions.SET_CATEGORY:
      return Object.assign({}, state, {
        activeCategoryId: action.filterId
      });
    default:
      return state;
  }
};

export default category;
