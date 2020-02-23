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
        img: 'arkus_tangens',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Sign',
        label: 'B',
        parametrs : [],
        maxInputs: 1,
        img:'sign',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Cos',
        label: 'C',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img:'kosinus',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Mrtva zona',
        label: 'D',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1,
        img:'mrtva_zona',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Exp',
        label: 'E',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img:'exp',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Generator funkcija',
        label: 'F',
        parametrs : ['Parametar 1', 'Parametar 2'],
        maxInputs: 1,
        img: 'generator_funkcija',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Pojacanje',
        label: 'G',
        parametrs : ['Parametar 1'],
        maxInputs: 1,
        img: 'pojacanje',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Kvadratni koren',
        label: 'H',
        parametrs : [],
        maxInputs: 1,
        img: 'kvadratni_koren',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Integrator',
        label: 'I',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3,
        img: 'integrator',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Generator slucajnih brojeva',
        label: 'J',
        parametrs : [],
        maxInputs: 0,
        img:'generator_slucajnih_brojeva',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Konstanta',
        label: 'K',
        parametrs : ['Konstanta'],
        maxInputs: 0,
        img: 'konstanta',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Ogranicavac',
        label: 'L',
        parametrs : ['Donja granica', 'Gornja granica'],
        maxInputs: 1,
        img: 'ogranicavac',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Apsolutna vrednost',
        label: 'M',
        parametrs : [],
        maxInputs: 1,
        img: 'apsolutna_vrednost',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Negativni ogranicavac',
        label: 'N',
        parametrs : [],
        maxInputs: 1,
        img: 'negativni_ogranicavac',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Offset',
        label: 'O',
        parametrs : ['Pomeraj'],
        maxInputs: 1,
        img: 'offset',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Pozitivni ogranicavac',
        label: 'P',
        parametrs : [],
        maxInputs: 1,
        img: 'pozitivni_ogranicavac',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Quit',
        label: 'Q',
        parametrs : [],
        maxInputs: 2,
        img:'quit',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Relej',
        label: 'R',
        parametrs : [],
        maxInputs: 3,
        img: 'relej',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Sin',
        label: 'S',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 1,
        img: 'sinus',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Generator impulsa',
        label: 'T',
        parametrs : ['Parametar 1'],
        maxInputs: 1,
        img: 'generator_impulsa',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Jedinicno kasnjenje',
        label: 'U',
        parametrs : [],
        maxInputs: 1,
        img: 'jedinicno_kasnjenje',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Vacuous',
        label: 'V',
        parametrs : ['Parametar 1'],
        maxInputs: 0,
        img: 'vacuous',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Sabirac',
        label: 'W',
        parametrs : ['Parametar 1', 'Parametar 2', 'Parametar 3'],
        maxInputs: 3,
        img: 'sabirac',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Mnozac',
        label: 'X',
        parametrs : [],
        maxInputs: 2,
        img: 'mnozac',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Wye',
        label: 'Wye',
        parametrs : ['Parametar 1'],
        maxInputs: 2,
        img: 'wye',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Kolo zadrske',
        label: 'Z',
        parametrs : [],
        maxInputs: 2,
        img: 'kolo_zadrske',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Delitelj',
        label: '/',
        parametrs : [],
        maxInputs: 2,
        img: 'delitelj',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Invertor',
        label: '-',
        parametrs : [],
        maxInputs: 1,
        img: 'invertor',
        inputs: [],
        inputsArray: []
    },
    {
        name: 'Vreme',
        label: 't',
        parametrs : [],
        maxInputs: 0,
        img: 'vreme',
        inputs: [],
        inputsArray: []
    },
];

global._info = "1. You can select block by clicking on it, and unselect it by double clicking on it. \n" +
    "2. Green block with border on canvas is the selected one and purple blocks are availabe blocks to make relationships with.\n" +
    "3. In case you don't see all the blocks you picked, you can zoom or unzoom your working sheet on mouse wheel.\n" +
    "4. On side bar info you can change block's parameters and save it by clicking on enter.\n" +
    "5. Clicking on \"OPTIONS\" you set parameters of entire simulation.\n" +
    "6. On \"DELETE\" you remove selected node and all relationships made with it.\n" +
    "7. On \"EXPORT\" you download Excel file of your simulation data. "

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
