import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State 
const initialState = {
    transactions: []
}

// create context (kind of store)
export const GlobalContext = createContext(initialState);

// Provider (children will be the components around which we will wrap the components)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); // dispatch is the action we can perform using reducer to change the state


    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider 
        value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}