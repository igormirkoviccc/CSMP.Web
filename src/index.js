import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

global._data = [
    {
        name: 'ArcTan',
        label: 'A',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img: 'arkus_tangens'
    },
    {
        name: 'Sign',
        label: 'B',
        parametrs : [],
        maxInputs: 1,
        img:'sign'
    },
    {
        name: 'Cos',
        label: 'C',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img:'kosinus'
    },
    {
        name: 'Mrtva zona',
        label: 'D',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1,
        img:'mrtva_zona'
    },
    {
        name: 'Exp',
        label: 'E',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img:'exp'
    },
    {
        name: 'Generator funkcija',
        label: 'F',
        parametrs : ['Parametar 1', 'Parametar 2'],
        maxInputs: 1,
        img: 'generator_funkcija'
    },
    {
        name: 'Pojacanje',
        label: 'G',
        parametrs : ['Parametar 1'],
        maxInputs: 1,
        img: 'pojacanje'
    },
    {
        name: 'Kvadratni koren',
        label: 'H',
        parametrs : [],
        maxInputs: 1,
        img: 'kvadratni_koren'
    },
    {
        name: 'Integrator',
        label: 'I',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3,
        img: 'integrator'
    },
    {
        name: 'Generator slucajnih brojeva',
        label: 'J',
        parametrs : [],
        maxInputs: 0,
        img:'generator_slucajnih_brojeva'
    },
    {
        name: 'Konstanta',
        label: 'K',
        parametrs : ['Konstanta'],
        maxInputs: 0,
        img: 'konstanta'
    },
    {
        name: 'Ogranicavac',
        label: 'L',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1,
        img: 'ogranicavac'
    },
    {
        name: 'Apsolutna vrednost',
        label: 'M',
        parametrs : [],
        maxInputs: 1,
        img: 'apsolutna_vrednost'
    },
    {
        name: 'Negativni ogranicavac',
        label: 'N',
        parametrs : [],
        maxInputs: 1,
        img: 'negativni_ogranicavac'
    },
    {
        name: 'Offset',
        label: 'O',
        parametrs : ['Pomeraj'],
        maxInputs: 1,
        img: 'offset'
    },
    {
        name: 'Pozitivni ogranicavac',
        label: 'P',
        parametrs : [],
        maxInputs: 1,
        img: 'pozitivni_ogranicavac'
    },
    {
        name: 'Quit',
        label: 'Q',
        parametrs : [],
        maxInputs: 2,
        img:'quit'
    },
    {
        name: 'Relej',
        label: 'R',
        parametrs : [],
        maxInputs: 3,
        img: 'relej'
    },
    {
        name: 'Sin',
        label: 'S',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img: 'sinus'

    },
    {
        name: 'Generator impulsa',
        label: 'T',
        parametrs : ['Parametar 1'],
        maxInputs: 1,
        img: 'generator_impulsa'

    },
    {
        name: 'Jedinicno kasnjenje',
        label: 'U',
        parametrs : [],
        maxInputs: 1,
        img: 'jedinicno_kasnjenje'
    },
    {
        name: 'Vacuous',
        label: 'V',
        parametrs : ['Parametar 1'],
        maxInputs: 0,
        img: 'vacuous'
    },
    {
        name: 'Sabirac',
        label: 'W',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3,
        img: 'sabirac'
    },
    {
        name: 'Mnozac',
        label: 'X',
        parametrs : [],
        maxInputs: 2,
        img: 'mnozac'
    },
    {
        name: 'Wye',
        label: 'Wye',
        parametrs : ['Parametar 1'],
        maxInputs: 2,
        img: 'wye'
    },
    {
        name: 'Kolo zadrske',
        label: 'Z',
        parametrs : [],
        maxInputs: 2,
        img: 'kolo_zadrske'
    },
    {
        name: 'Delitelj',
        label: '/',
        parametrs : [],
        maxInputs: 2,
        img: 'delitelj'
    },
    {
        name: 'Invertor',
        label: '-',
        parametrs : [],
        maxInputs: 1,
        img: 'invertor'
    },
    {
        name: 'Vreme',
        label: 't',
        parametrs : [],
        maxInputs: 2,
        img: 'vreme'
    },
];

global._info = "This is CSMP application for simulation diferent proccess. On left side bar there is block(operations) and on click on them you add to canvas. On double click on operation you can take action, to delete it, to link it to other block. Purple color of block means you can link it with green one. "

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
