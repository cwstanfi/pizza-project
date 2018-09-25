import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    mushroom: 0.5,
    cheese: 0.4,
    redSauce: 1.3,
    whiteSauce: 1.3,
    pepperoni: 0.7
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            mushroom: 0,
            pepperoni: 0,
            cheese: 0,
            redSauce: 0,
            whiteSauce: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    };


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };


        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal>
                </Modal>
                <Burger/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;