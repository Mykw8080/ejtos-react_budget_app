import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const saveBudget = () => {
        dispatch({ type: 'SET_BUDGET', payload: parseInt(newBudget) });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{newBudget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={saveBudget}
            />
        </div>
    );
};

export default Budget;
