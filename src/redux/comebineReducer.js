// Map all reducers to rootReducer
const combineReducer = reducers => {
  return function(state, action) {
    // { [MODULE_NAME_1]: stateReducer1, [MODULE_NAME_2]: stateReducer2  }
    let nextState = {};
    for (let MODULE_NAME in reducers) {
      nextState = {
        ...nextState,
        [MODULE_NAME]: reducers[MODULE_NAME](state[MODULE_NAME], action)
      };
    }
    // { [MODULE_NAME_1]: stateReducer1, [MODULE_NAME_2]: stateReducer2  }
    return nextState;
  };
};

export default combineReducer;
