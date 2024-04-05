import React from 'react';

interface ContentSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, title, children }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default ContentSection;