import React, { createContext, useReducer } from 'react';

// The reducer to update the state based on the action type
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // Handle adding expense logic
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'RED_EXPENSE':
            // Handle reducing expense logic
            return {
                ...state,
                expenses: state.expenses.map(expense =>
                    expense.name === action.payload.name ? { ...expense, cost: expense.cost - action.payload.cost } : expense
                )
            };
        case 'DELETE_EXPENSE':
            // Handle deleting expense logic
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.name !== action.payload)
            };
        case 'SET_BUDGET':
            // Handle setting new budget
            return {
                ...state,
                budget: action.payload
            };
        case 'CHG_CURRENCY':
            // Handle changing currency
            return {
                ...state,
                currency: action.payload
            };
        default:
            return state;
    }
};

// Initial state
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

// Create context
export const AppContext = createContext();

// Provider component
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                currency: state.currency,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
