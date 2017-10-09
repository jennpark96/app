const defaultState = {
  docked: true,
  submitted: false,
  major1: '',
  major2: ''
}

export default (state=defaultState, action) => {
  switch(action.type){
    case "DOCK_TRIGGERED": {
      state = {...state, docked: !state.docked}
      break;
    }
    case "BUTTON_PRESS": {
      state = {...state, submitted: !state.submitted}
      break;
    }
    case "MAJOR1_CHANGE": {
      state = {...state, major1: action.major}
      break;
    }
    case "MAJOR2_CHANGE": {
      state = {...state, major2: action.major}
      break;
    }
  }
  return state;
};
