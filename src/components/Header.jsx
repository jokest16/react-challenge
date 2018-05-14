import React from 'react';

import Icon from './Icon';

function Header(props) {
    return (
        <header className="header-block">
            <div className="container-fluid rc-intro">
                <div className="container">
                    <Icon name={'react'}/>
                    <h1 className="rc-title">React Challenge</h1>
                    <p className="rc-description">Поиск и сортировка данных</p>
                </div>
            </div>
        </header>
    );
}

export default Header;