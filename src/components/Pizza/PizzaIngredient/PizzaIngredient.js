import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './PizzaIngredient.css';

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('redSauce'):
                ingredient = <div className={classes.RedSauce}></div>;
                break;
            case ('whiteSauce'):
                ingredient = <div className={classes.WhiteSauce}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.cheese}></div>;
                break;
            case ('pepperoni'):
                ingredient = <div className={classes.Pepperoni}></div>;
                break;

            default:
                ingredient = null;
        }

        return ingredient;
    }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;