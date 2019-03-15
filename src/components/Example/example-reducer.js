import { CLICK_TEXT } from './../../store/actionTypes';

const initialState = {
  exampleText: 'Learn React'
}

const example = (state = initialState, action) => {
  switch(action.type) {
    case CLICK_TEXT:
      return {
        ...state,
        exampleText: 'Learned React'
      }
    default:
      return state;
  }
}

export default example;
