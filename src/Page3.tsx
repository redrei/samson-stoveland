// Page3.jsx
import React from 'react';

const Page3 = () => (
    <div className="page-content" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Birk's Photographic Journey</h2>
        <p>
            Photography is more than a hobby for Birk; it's a way of capturing moments and telling stories without words.
            Through his lens, Birk explores the interplay of light, shadow, and color, bringing to life the ordinary and
            extraordinary moments alike.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
            {/* Placeholder for images - Replace src with actual image URLs */}
            <img src="https://pricespy-75b8.kxcdn.com/product/standard/800/4931232.jpg" alt="Photograph 1" style={{ width: '30%', height: 'auto' }} />
            <img src="https://pricespy-75b8.kxcdn.com/product/standard/800/4931232.jpg" alt="Photograph 2" style={{ width: '30%', height: 'auto' }} />
            <img src="https://pricespy-75b8.kxcdn.com/product/standard/800/4931232.jpg" alt="Photograph 3" style={{ width: '30%', height: 'auto' }} />
        </div>
        <p>
            Each photograph tells a story, from the serene to the chaotic, reflecting Birk's deep appreciation for the world's
            diverse beauty and his continual pursuit of the perfect shot.
        </p>
    </div>
);

export default Page3;