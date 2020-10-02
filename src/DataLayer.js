import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pull the data
export const useStateValue = () => useContext(StateContext)