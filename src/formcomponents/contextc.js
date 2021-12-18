import React from 'react';
import {useState} from 'react'

const Context = (props) => {

    // const; [value, setValue] = useState()
    console.log(props);
    props.handleClick('ramshyam');
    return (
        <div>
        this is my context
        {props.value}

        {/* {props.handleClick()} */}


            
        </div>
    )
}

export default Context;