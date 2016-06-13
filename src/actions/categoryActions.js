import { categoryActions } from 'ActionTypes';

const setCategoryFilter = (filterId) => {
  return {
    type: categoryActions.SET_CATEGORY,
    filterId
  };
};

export default setCategoryFilter;
