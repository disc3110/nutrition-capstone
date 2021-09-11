/* eslint-disable no-case-declarations */
const SET_FILTER = 'SET_FILTER';

const initialState = [{ toFilter: null }];

export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      const newState = { toFilter: action.payload };
      return newState;
    default:
      return state;
  }
};

export default reducer;
