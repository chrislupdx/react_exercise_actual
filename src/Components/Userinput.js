import React from 'react';

const userinput = (props) => {
    return (
    <div>
        <input 
            type="submit" 
            value="change" 
            onClick={props.click} 
        />

        <input 
            type="text" 
            onChange= {props.changed} 
            value= {props.currentName} 
        />
    </div>

    );
};

export default userinput;