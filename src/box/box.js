import React from 'react';

import './box.css';

const Box = (props) => {
    return (
        <button className="board-box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export { Box }