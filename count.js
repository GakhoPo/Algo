import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clocker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state) => ({
            num: state.num + 1,
        }));
    }

    render() {
        return <div>The count is {this.state.num}</div>;
    }
}

ReactDOM.render(<Clocker />, document.getElementById("root"));
