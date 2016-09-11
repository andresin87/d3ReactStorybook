import React, { Component } from 'react';

import Alphabet from './Alphabet';

class App extends Component {
    render() {

        return (
            <div className="container">
                <h2>An animated Alphabet built with React and d3js v4 transitions</h2>
                <p>Based on Bostock's block <a href="https://bl.ocks.org/mbostock/a8a5baa4c4a470cda598">General Update Pattern 4.0</a></p>
                <svg width="800" height="600">
                    <Alphabet x="32" y="300" />
                </svg>
                <p>Example coppied from Swizec Teller's (react-d3-enter-exit-transitions repository) <a href="https://github.com/Swizec/react-d3-enter-exit-transitions/tree/alphabet">React d3 enter/exit animations.</a></p>
            </div>
        );
    }
}
export default App;