import axios from "axios";

/* -----------------    ACTION TYPES    ------------------ */

const GET_APARTMENTS = "GET_APARTMENTS";
// const ADD_APARTMENTS = "ADD_APARTMENTS";
// const UPDATE_APARTMENTS = "UPDATE_APARTMENTS";
// const DELETE_APARTMENTS = "DELETE_APARTMENTS";

/* ------------     ACTION CREATORS      ------------------ */

const getApartments = apartment => {
  return {
    type: GET_APARTMENTS,
    apartment
  };
};

/* ------------          REDUCER         ------------------ */
const initialState = [];
export const apartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APARTMENTS:
      // console.log("action", action);
      return action.apartment;
    default:
      return state;
  }
};

/* ------------       THUNK CREATORS     ------------------ */
export function getApartmentThunk() {
  return async dispatch => {
    try {
      //response.data =[]
      const { data } = await axios.get("/api/apartment");
      dispatch(getApartments(data));
    } catch (err) {
      console.log("error in apartment get thunk");
    }
  };
}
