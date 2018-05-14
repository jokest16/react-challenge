import React from 'react';

function Icon(props) {
    return (
        <svg className={`svg-icon svg-${ props.name }`}>
            <use xlinkHref={`#${ props.name }`}></use>
        </svg>
    )
}

export default Icon;