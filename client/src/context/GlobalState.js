import React, { createContext, useReducer } from "react";
import axios from "axios";

import { AppReducer } from "../reducer/AppReducer";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTION Functions
  const addTransaction = async (newTransaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // add in DB
      const res = await axios.post(
        "/api/v1/transactions",
        newTransaction,
        config
      );
      // add in UI
      dispatch({
        type: "ADD_TRAN",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRAN",
        payload: error.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      // delete from DB
      await axios.delete(`/api/v1/transactions/${id}`);
      // delete from UI
      dispatch({
        type: "DELETE_TRAN",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRAN",
        payload: error.response.data.error,
      });
    }
  };

  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRAN",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRAN",
        payload: error.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
