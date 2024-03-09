import React, { useState } from 'react';

const Card = ({ item, onContextMenu }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
        <div className={`card ${liked ? 'like' : ''}`} onContextMenu={onContextMenu}>
            <img src={item.url} alt="item" />
            <button onClick={handleLikeToggle}>{liked ? 'Unlike' : 'Like'}</button>
        </div>
    );
};

export default Card;
