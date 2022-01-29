import React from 'react';

const AllGames = ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>                        

            {items.length > 0 && items.map((item, key) => (
                <img src={item.thumbnail} alt={item.title} key={key}></img>
            ))}
            
        </div>
    );
}

export default AllGames;