import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="container-fluid rc-intro">
                <div className="container">
                    <img className="rc-img" src="../../images/react.svg" alt=""/>
                        <h1 className="rc-title">React Challenge</h1>
                        <p className="rc-description">Поиск и сортировка данных</p>
                </div>
            </div>
        </header>
    );
}

export default Header;