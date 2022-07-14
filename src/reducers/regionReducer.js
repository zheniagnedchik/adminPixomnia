const SET_REGION = "SET_REGION";

const defaultState = {
  region: false,
};

export default function regionReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
}
export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
