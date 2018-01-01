import { FETCH_WEATHER } from "../actions/index";

// the initial state would be a array rather than null
export default function(state = [], action) {
  // console.log(action);
  
  switch (action.type) {
    case FETCH_WEATHER:
      // payload object returned from redux promise contains other
      // properties like config, data, header, request
      if(action.payload.data)
        return [action.payload.data, ...state];  // return state.concat([action.payload,date])
      else
        return state;
      }
  return state;
}  