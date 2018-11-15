import React, { Component, Fragment } from 'react';
import './assets/css/App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Fragment>
                <div className="header">
                    <input/><button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>学react</li>
                </ul>
            </Fragment>
        );
    }
}


export default App;
