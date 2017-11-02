import React, {Component} from 'react';
import Quote from "./components/Quote";

class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>
                    Welcome to MyQuotes!
                </h1>
                <div>
                    <Quote/>
                </div>
            </div>
        );
    }
}

export default App;
