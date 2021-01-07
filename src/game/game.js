import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Board } from '../board/board';
import { Scoreboard } from '../scoreboard/scoreboard';

class Game extends Component {
    render() {
        return (
            <div className="app">
                <Board/>
            </div>
        );
    }
}

export { Game }