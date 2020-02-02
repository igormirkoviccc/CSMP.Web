import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

global._data = [
    {
        name: 'ArcTan',
        label: 'A',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1
    },
    {
        name: 'Sign',
        label: 'B',
        parametrs : [],
        maxInputs: 1,
    },
    {
        name: 'Cos',
        label: 'C',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
    },
    {
        name: 'Mrtva zona',
        label: 'D',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1,
    },
    {
        name: 'Exp',
        label: 'E',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
    },
    {
        name: 'Generator funkcija',
        label: 'F',
        parametrs : ['Parametar 1', 'Parametar 2'],
        maxInputs: 1,
    },
    {
        name: 'Pojacanje',
        label: 'G',
        parametrs : ['Parametar 1'],
        maxInputs: 1,
    },
    {
        name: 'Kvadratni koren',
        label: 'H',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Integrator',
        label: 'I',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3
    },
    {
        name: 'Generator slucajnih brojeva',
        label: 'J',
        parametrs : [],
        maxInputs: 0
    },
    {
        name: 'Konstanta',
        label: 'K',
        parametrs : ['Konstanta'],
        maxInputs: 0
    },
    {
        name: 'Ogranicavac',
        label: 'L',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1
    },
    {
        name: 'Apsolutna vrednost',
        label: 'M',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Negativni ogranicavac',
        label: 'N',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Offset',
        label: 'O',
        parametrs : ['Pomeraj'],
        maxInputs: 1
    },
    {
        name: 'Pozitivni ogranicavac',
        label: 'P',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Quit',
        label: 'Q',
        parametrs : [],
        maxInputs: 2
    },
    {
        name: 'Relej',
        label: 'R',
        parametrs : [],
        maxInputs: 3
    },
    {
        name: 'Sin',
        label: 'S',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1

    },
    {
        name: 'Generator impulsa',
        label: 'T',
        parametrs : ['Parametar 1'],
        maxInputs: 1
    },
    {
        name: 'Jedinicno kasnjenje',
        label: 'U',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Vacuous',
        label: 'V',
        parametrs : ['Parametar 1'],
        maxInputs: 0
    },
    {
        name: 'Sabirac',
        label: 'W',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3
    },
    {
        name: 'Mnozac',
        label: 'X',
        parametrs : [],
        maxInputs: 2
    },
    {
        name: 'Wye',
        label: 'Wye',
        parametrs : ['Parametar 1'],
        maxInputs: 2
    },
    {
        name: 'Kolo zadrske',
        label: 'Z',
        parametrs : [],
        maxInputs: 2
    },
    {
        name: 'Delitelj',
        label: '/',
        parametrs : [],
        maxInputs: 2
    },
    {
        name: 'Invertor',
        label: '-',
        parametrs : [],
        maxInputs: 1
    },
    {
        name: 'Vreme',
        label: 't',
        parametrs : [],
        maxInputs: 2
    },
];

global._info = "This is CSMP application for simulation diferent proccess. On left side bar there is block(operations) and on click on them you add to canvas. On double click on operation you can take action, to delete it, to link it to other block. Purple color of block means you can link it with green one. "

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
