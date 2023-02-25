import React, { useState } from 'react';

const HoverImage = ({ imageUrl, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleMouseEnter = () => {
        setShowInfo(true);
    };

    const handleMouseLeave = () => {
        setShowInfo(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <img
                src={imageUrl}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-info={info}
            />
            {showInfo && (
                <p
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '5px'
                    }}
                >
                    {info}
                </p>
            )}
        </div>
    );
};

export default HoverImage;

