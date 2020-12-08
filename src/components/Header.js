
import React from "react";
import {ReactComponent as IconRemove} from "../images/icon-remove.svg";
export const Header = ({filters, onRemoveFilter, onRemoveAllFilters}) => {

    const renderedFilters = filters.map(filter => (
        <div className="filter-tablet" key={filter}>
            <span className="filter-tablet__text">{filter}</span>
            <button 
                className="filter-tablet__remove-button"
                onClick={() => onRemoveFilter(filter)}
            >
                <IconRemove />
            </button>
        </div> 
    ))
    
    const navClasses = `navbar__wrapper container ${filters.length > 0 ? "navbar--visible" : ""}`;

    return(
        <header className="header">
            <div className={navClasses}>
                <nav className="navbar">
                    <div className="navbar__filter-tablets">
                        {renderedFilters}
                    </div>
                    <span 
                        className="navbar__clear-tablets"
                        onClick={() => onRemoveAllFilters()}
                    >
                        Clear
                    </span>    
                </nav>
            </div>    
        </header>
    )
}

export default Header;