export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRAN":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRAN":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "GET_TRAN":
      return {
        ...state,
        loading: false,
          transactions: action.payload,
      };
    case "ERROR_TRAN":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};