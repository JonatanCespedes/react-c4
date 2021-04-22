import React, { Component } from 'react';

class ClassComponent extends Component {
    render () {
        return (
            <section>
                <h1>Soy un componente de clase</h1>
                <h2>Son las {this.props.date.toLocaleTimeString()}</h2>
            </section>
        )
    }
}

export default ClassComponent;