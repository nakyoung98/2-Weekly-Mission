import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from '../commons/Card';

const root = ReactDOM.createRoot(document.getElementById('main-root'));
root.render(<SharedMainScreen />);

const classNames = [`card`];

function SharedMainScreen() {
    return (
        <div>
        <Card classNames={classNames}/>
        </div>
    );
}