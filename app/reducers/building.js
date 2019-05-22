import axios from "axios";

/* -----------------    ACTION TYPES    ------------------ */

const GET_BUILDINGS = "GET_BUILDINGS";
// const ADD_BUILDINGS = "ADD_BUILDINGS";
// const UPDATE_BUILDINGS = "UPDATE_BUILDINGS";
// const DELETE_BUILDINGS = "DELETE_BUILDINGS";

/* ------------     ACTION CREATORS      ------------------ */

const getbuildings = building => {
  return {
    type: GET_BUILDINGS,
    building
  };
};

/* ------------          REDUCER         ------------------ */
const initialState = [];
export const buildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS:
      // console.log("action", action);
      return action.building;
    default:
      return state;
  }
};

/* ------------       THUNK CREATORS     ------------------ */
export function getBuildingThunk() {
  return async dispatch => {
    try {
      //response.data =[]
      const { data } = await axios.get("/api/building");
      dispatch(getbuildings(data));
    } catch (err) {
      console.log("error in building get thunk");
    }
  };
}
