import React from 'react';
import '../App.css';

const ButtonPad = ({btnDetails, handleFunction}) => {
    
    return (
    <div id="number-pad">
        {btnDetails.map(btnDetail => (
        <button 
        className="button" 
        key={ btnDetail.id } 
        id={ btnDetail.id } 
        onClick={() => handleFunction(btnDetail.value)}>
            {btnDetail.value}
        </button>
      ))}
    </div>
    );
};

export default ButtonPad;