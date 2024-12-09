const initialState = {
  query: "",
  jobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};
export default jobsReducer;
