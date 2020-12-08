import React from "react";

export const JobItemButton = ({text, onTabletClick}) => {
    return(
        <button 
            className="job-card__tablet-button"
            onClick={() => onTabletClick(text)}
        >
            {text}
        </button>   
    )
}

export default JobItemButton;