import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
    render() {
        let myVar = "holy crap";
        return (
            <div>
                <Header title= {this.props.title ? this.props.title : "no title given"}></Header>
                <Grid data={[<div><h1> React headers</h1></div>, "two", "three"]} />
            </div>
        )
    }
}