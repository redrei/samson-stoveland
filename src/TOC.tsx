import React from 'react';

interface TOCItem {
    id: string;
    title: string;
}

interface TableOfContentsProps {
    items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
    return (
        <div className="toc-container">
            <nav className="toc">
                <h3>Table of Contents</h3>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContents;