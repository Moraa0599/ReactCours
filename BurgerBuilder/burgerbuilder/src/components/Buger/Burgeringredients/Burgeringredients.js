import React from 'react'

import classes from '../../Buger'

const burgerIngredients = (props) => {
    let ingredients = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
    }
};


export default burgerIngredients;