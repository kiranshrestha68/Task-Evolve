const entities = '[MODERN]';

const actions = {
    GET_MODERN_REQ: `${entities} GET_MODERN_REQ`,
    GET_MODERN_SUC: `${entities} GET_MODERN_SUC`,
    GET_MODERN_FAIL: `${entities} GET_MODERN_FAIL`,


    GET_GENERAL_REQ: `${entities} GET_GENERAL_REQ`,
    GET_GENERAL_SUC: `${entities} GET_GENERAL_SUC`,
    GET_GENERAL_FAIL: `${entities} GET_GENERAL_FAIL`,


   

    getModern:(payload) => ({
    type: actions.GET_MODERN_REQ,
    }),


    getGeneralTrade:(payload) => ({
        type: actions.GET_GENERAL_REQ,
        }),
  
    
}

export default actions;