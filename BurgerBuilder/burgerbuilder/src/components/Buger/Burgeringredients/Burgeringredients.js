import React from 'react'
import PropType from 'prop-type'
import classes from './Bugeringredients.css'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                    ingredient = <dic className={classes.Meat}></dic>;
                    break;
            case('cheese'):
                    ingredient = <dic className={classes.Cheese}></dic>;
                    break;
            case('bacon'):
                    ingredient = <dic className={classes.Bacon}></dic>;
                    break;
            case('salad'):
                    ingredient = <dic className={classes.Salad}></dic>;
                    break;
            default:
            ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredients.PropType = {
    type:PropType.string.isRequired
};

export default BurgerIngredients;