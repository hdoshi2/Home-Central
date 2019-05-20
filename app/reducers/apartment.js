import axios from "axios";

/* -----------------    ACTION TYPES    ------------------ */

const GET_APARTMENTS = "GET_APARTMENTS";
const ADD_APARTMENTS = "ADD_APARTMENTS";
const DELETE_APARTMENTS = "DELETE_APARTMENTS";
const DELETE_APARTMENTS = "DELETE_APARTMENTS";

/* ------------     ACTION CREATORS      ------------------ */

const getapartments = apartment => {
  return {
    type: GET_APARTMENTS,
    apartment
  };
};

/* ------------          REDUCER         ------------------ */

export const apartmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_APARTMENTS:
      return action.apartment;
    default:
      return state;
  }
};

/* ------------       THUNK CREATORS     ------------------ */
export function getCampusesThunk() {
  return async dispatch => {
    try {
      //response.data =[]
      const { data } = await axios.get("/api/apartment");
      dispatch(getapartments(data));
    } catch (err) {
      console.log("error in apartment get thunk");
    }
  };
}
