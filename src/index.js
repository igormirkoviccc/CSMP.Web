import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

global._data = [
    {
        name: 'ArcTan',
        label: 'A'
    },
    {
        name: 'Sign',
        label: 'B',
    },
    {
        name: 'Cos',
        label: 'C'
    },
    {
        name: 'Mrtva zona',
        label: 'D'
    },
    {
        name: 'Exp',
        label: 'E'
    },
    {
        name: 'Generator funkcija',
        label: 'F'
    },
    {
        name: 'Pojacanje',
        label: 'G'
    },
    {
        name: 'Kvadratni koren',
        label: 'H'
    },
    {
        name: 'Integrator',
        label: 'I'
    },
    {
        name: 'Generator slucajnih brojeva',
        label: 'J'
    },
    {
        name: 'Konstanta',
        label: 'K'
    },
    {
        name: 'Ogranicavac',
        label: 'L'
    },
    {
        name: 'Apsolutna vrednost',
        label: 'M'
    },
    {
        name: 'Negativni ogranicavac',
        label: 'N'
    },
    {
        name: 'Offset',
        label: 'O'
    },
    {
        name: 'Pozitivni ogranicavac',
        label: 'P'
    },
    {
        name: 'Quit',
        label: 'Q'
    },
    {
        name: 'Relej',
        label: 'R'
    },
    {
        name: 'Sin',
        label: 'S'
    },
    {
        name: 'Generator impulsa',
        label: 'T'
    },
    {
        name: 'Jedinicno kasnjenje',
        label: 'U'
    },
    {
        name: 'Vacuous',
        label: 'V'
    },
    {
        name: 'Sabirac',
        label: 'W'
    },
    {
        name: 'Mnozac',
        label: 'X'
    },
    {
        name: 'Wye',
        label: ''
    },
    {
        name: 'Kolo zadrske',
        label: 'Z'
    },
    {
        name: 'Delitelj',
        label: '/'
    },
    {
        name: 'Invertor',
        label: '-'
    },
    {
        name: 'Vreme',
        label: 't'
    },
]

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
