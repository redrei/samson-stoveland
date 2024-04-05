import React from 'react';
import TableOfContents from './TOC';
import ContentSection from './CS';

function Home(){
    const sections = [
        { id: 'section1', title: 'Birk Stoveland' },
    ];
    return(
        <div className="page-content" style={{textAlign: 'center'}}>
            <h1>Velkommen til Samson-stoveland.com</h1>
            <TableOfContents items={sections} />
            <ContentSection id="section1" title="Birk Stoveland">
                <div className="sections-container">
                    <div className="section">
                        <p>Jeg er Birk Stoveland, og er da innehaver av denne nettsiden. Jeg skriver for tiden masteroppgave på NTNU om Self-supervised learning, eller selvveiledet dyp læring hvis du foretrekker å ha det på norsk.</p>
                    </div>
                    <div className="section">nerd</div>
                    <div className="section">blablabla</div>
                </div>
            </ContentSection>
        </div>
    )
}

export default Home;
