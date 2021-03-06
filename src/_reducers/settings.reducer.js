import { settingsConstants } from '../_constants';

const initialState = {
  sending1: false,
  sent1:  false,
  sending1: false,
  sent1:  false,
  panId: '',
}

export function settings(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case settingsConstants.SET_PANID_REQUEST:
      return {
        ...state,
        sending: true,
        sent: false
      };
    case settingsConstants.SET_PANID_SUCCESS:
      return {
        ...state,
        sending: false,
        sent: true
      };
    case settingsConstants.SET_PANID_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error,
        sent: false
      };
    case settingsConstants.GETPAN_SUCCESS:
    { console.log(action.panId["panID"].toString());
      return {
        ...state,
        panId: action.panId["panID"].toString()
      };
    }
      case settingsConstants.SET_THRESHOLD_REQUEST:
      return {
        ...state,
        sending1: true,
        sent1: false
      };
    case settingsConstants.SET_THRESHOLD_SUCCESS:
      return {
        ...state,
        sending1: false,
        sent1: true
      };
    case settingsConstants.SET_THRESHOLD_FAILURE:
      return {
        ...state,
        sending1: false,
        error: action.error,
        sent1: false
      };
      case settingsConstants.SET_HEARTBEAT_REQUEST:
      return {
        ...state,
        sending2: true,
        sent2: false
      };
    case settingsConstants.SET_HEARTBEAT_SUCCESS:
      return {
        ...state,
        sending2: false,
        sent2: true
      };
    case settingsConstants.SET_HEARTBEAT_FAILURE:
      return {
        ...state,
        sending2: false,
        error: action.error,
        sent2: false
      };

    case settingsConstants.SET_TIMEZONE_REQUEST:
      return {
        ...state,
        sending2: true,
        sent2: false
      };
    case settingsConstants.SET_TIMEZONE_SUCCESS:
      return {
        ...state,
        sending2: false,
        sent2: true
      };
    case settingsConstants.SET_TIMEZONE_FAILURE:
      return {
        ...state,
        sending2: false,
        error: action.error,
        sent2: false
      };
    default:
      return state
  }
}