import React from 'react';

import Aux from '../../HOC/Aux';

import classes from './layout';



const layout = (props) => (
    <Aux>
        <div>Toolbar,SideDrawer, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;