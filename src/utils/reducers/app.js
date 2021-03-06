import { ActionTypes } from "utils/actions";

const initial_state = {
  sidebarShow: 'responsive',
  sideMenu:[]
}

export default function changeState(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
