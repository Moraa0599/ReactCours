import React, {Component} from 'react';

import Aux from '../../HOC/Aux';

import Burger from '../../components/Buger/Burger';

class  BurgerBuilder extends Component {
    render (){
        return (
            <Aux>
               <Burger/>
               <div>BurgerBuilder</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;