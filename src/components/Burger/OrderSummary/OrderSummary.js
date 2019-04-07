import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(
        igKey => {
            return (
             <li key={igKey}>
                 <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            ) ;
    });

     return (
         <Aux>
             <h1>Your Order</h1>
             <p>A delicious burger with the following ingredients:</p>
             <ul>
                 {ingredientsSummary}
             </ul>
             <p>Continiue to Check Out?</p>
         </Aux>
     );
};

export default orderSummary;