import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'; 
import { Board } from '../board/board';
import { Scoreboard } from '../scoreboard/scoreboard';

class Game extends Component {
    render() {
        return (
            <div className="app">
                <HashRouter>
                    <Route exact path="/" component={Scoreboard}/>
                    <Route exact path="/board" component={Board}/>
                </HashRouter>
            </div>
        );
    }
}

export { Game }