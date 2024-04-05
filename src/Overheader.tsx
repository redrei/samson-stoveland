import './App.css'

// @ts-ignore
function OverHeader({ setPage }){
    return(
        <div className="OverHeader">
            <div className="title">
                <p>Samson-stoveland.com</p>
            </div>
            <div className="header-navigation">
                <button onClick={() => setPage('home')}>home</button>
                <button onClick={() => setPage('page2')}>Page 2</button>
                <button onClick={() => setPage('page3')}>Page 3</button>
            </div>
        </div>
    )
}

export default OverHeader;