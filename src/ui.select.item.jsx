import React from 'react';

export const UISelectItem = (props) => {
    let {item} = props;
    return (
        <div className="list-item"
             tabIndex={item.id} onClick={props.handleClick}>
            <span title={item.name}>{item.name}</span>
        </div>
    )
};
