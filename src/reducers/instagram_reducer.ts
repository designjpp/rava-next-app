import {
    FetchInstagram,
    InstagramTypes
  } from '../actions';
  
  type Actions = FetchInstagram;
  
  export interface InstagramState {
    feed: {

    }
  }
  
  export const initialState: InstagramState = {
    feed: []
  };
  
  function fetchInstragramPost(
      state:InstagramState = initialState, 
      action: Actions) {
    switch (action.type) {
      case InstagramTypes.fetchInstagram:
        return { ...state, feed: action.payload };
      default:
        return state;
    }
  }
  
  export default fetchInstragramPost