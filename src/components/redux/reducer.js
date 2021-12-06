import actions from './action';

const initialState = {
  loading: false,
  message: '',
  modernDetails:[],
  generalDetails:[],

 
};

const ModernReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MODERN_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_MODERN_SUC:
      return {
        ...state,
        loading: false,
        modernDetails: action.modernDetails,

      };
    case actions.GET_MODERN_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

      case actions.GET_GENERAL_REQ:
        return {
          ...state,
          loading: true,
        };
      case actions.GET_GENERAL_SUC:
        return {
          ...state,
          loading: false,
          generalDetails: action.generalDetails,
  
        };
      case actions.GET_GENERAL_FAIL:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };


    default:
      return {
        ...state,
      };
  }
};

export default ModernReducer;