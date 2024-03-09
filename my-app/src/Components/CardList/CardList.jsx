import React from 'react';
import Card from '../../Components/Card/Card';

const CardList = ({ items, onContextMenu }) => {
    return (
        <div className="card-list">
            {items.map((item, index) => (
                <Card key={index} item={item} onContextMenu={() => onContextMenu(index)} />
            ))}
        </div>
    );
};

export default CardList;
