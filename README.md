# index.js


```
import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} initialAge={27} />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

```


# home.js

```
import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
};

```
