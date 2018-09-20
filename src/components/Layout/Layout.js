import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        {/*These are placeholders for the toolbar component, the sidebar component and the background component */}
        <div>Toolbar - SideBar - Background</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

);

export default layout;
