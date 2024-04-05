// Page2.jsx
import React from 'react';

const Page2 = () => (
    <div className="page-content" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Birk's Outdoor Adventures</h2>
        <p>
            Birk is an avid explorer of the natural world, finding peace and inspiration in the great outdoors. From
            the towering mountains to the serene lakes, he's journeyed across diverse landscapes, capturing the beauty of
            our planet through his lens.
        </p>
        <img
            src="data:image/jpeg;base64,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"
            alt="Outdoor Adventure"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
        />
        <p>
            Whether it's hiking through dense forests or kayaking down tranquil rivers, Birk's adventures remind us of the
            importance of connecting with nature and preserving its beauty for future generations.
        </p>
    </div>
);

export default Page2;