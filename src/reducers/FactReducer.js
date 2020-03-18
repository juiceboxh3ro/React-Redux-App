import { FETCH_DATA, UPDATE_FACTS, SET_ERROR } from '../actions';

/*
facts array object
  {
    _id: 1,
    text: 'One fact for you',
    type: 'cat',
    user: {
      _id: 1,
      name: {
        first: 'egg',
        last: 'bert'
      }
    },
    upvotes: 100
  }
*/

const initialState = {
  facts: [],
  isFetchingFacts: false,
  error: ''
}

export const factReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      console.log('Reducer: API Request sent');
      return {
        ...state,
        facts: [],
        isFetchingData: true
      };
      
    case UPDATE_FACTS:
      console.log('Reducer API Request received');
      console.log(action.payload)
      return {
        ...state,
        facts: action.payload.all,
        isFetchingData: false
      };

    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
}