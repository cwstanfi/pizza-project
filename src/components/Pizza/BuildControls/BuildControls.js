import React from 'react';

import classes from './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    { label: ' Red Sauce', type: 'redSauce' },
    { label: 'White Sauce', type: 'whiteSauce' },
    { label: 'Mushrooms', type: 'mushroom' },
    { label: 'Pepperoni', type: 'pepperoni' },
    { label: 'Cheese', type: 'cheese'}


];

const buildControls = (props) => (
    <div>
        <p>Current Price:</p>
            <BuildControl/>
        <button>ORDER NOW</button>
    </div>
);

export default buildControls;