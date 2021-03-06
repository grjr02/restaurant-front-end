import React, {useState} from 'react';
import Display from "./Display";
import {useSelector, useDispatch} from 'react-redux';

    

export default function Pending(props) {
    const [compButton, setCompButton] = useState(true);
    const logged = useSelector(state => state.logged);

    return (
        <div>
            
            <h4>{props.title}</h4>
            {/* logged ?  */}

            {props.map.length === 0 ? 

            <p style={{padding:'50px'}}>No pending orders</p>

                :

            <Display map={props.map} but={compButton} getorder={props.getorder}/>
            
            }
            
        
        </div>
    )
}
