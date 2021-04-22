import React, { Component } from 'react';

class StatefullComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.ID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount( ) {
        clearInterval(this.ID)
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render () {
        console.log("Comp de clase renderizado")
        return (
            <div>
                <h1>Soy un componente de clase con estado</h1>
                <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
};

export default StatefullComponent; 