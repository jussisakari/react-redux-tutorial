import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({id: new Date(), value: action.payload.value})      
    }
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    // const updatedArray = state.results.filter(result => {
    //   return result.id !== action.payload.id
    // });
    const updatedArray = state.results.filter(result => result.id !== action.payload.id);
    return {
      ...state,
      results: updatedArray
    }
  }

  return state;
}

export default reducer;