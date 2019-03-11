import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "hi Brad"
        }
    }

    onClick() {
        this.setState({ title: this.state.title === "hi Brad" ? "sorry?" : "hi Brad"})
    }

    render() {
        return (
            <button onClick = {() => { this.onClick() }}>{this.state.title}</button>
        )
    }
}