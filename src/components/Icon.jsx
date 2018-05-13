import React from 'react';

function Icon(props) {
    return (
        <svg className={`svg-icon svg-${ props.name }`} height="1em" width="1em">
            <use xlinkHref={`#${ props.name }`}></use>
        </svg>
    )
}

export default Icon;