import React from 'react';

export default ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>            
                        
            {items.length > 0 && items.map((item, key) => (
                <img src={item.thumbnail} alt={item.title} key={key}></img>
            ))}
            
        </div>
    );
}