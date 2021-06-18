import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './components/Todos';
import CreateEle from './components/CreateEle';
import Button from './components/Button';
import RandomValue from './components/RandomValue';
import ClickableImage from './components/ClickableImage';
import SearchEngines from './components/SearchEngines';
import CountManager from './components/CountManager';
import CharacterCount from './components/CharacterCount';

ReactDOM.render(
  <React.StrictMode>
    <Todos />
    <CreateEle />
    <CountManager />
    <CharacterCount />
    <RandomValue />
    <SearchEngines />
  </React.StrictMode>,
  document.getElementById('root')
);


