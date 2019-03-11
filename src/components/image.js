import React from 'react';

export default class Image extends React.Component {
    render() {
        let customClass = this.props.classes ? this.props.classes : "img-fluid"
        return (
            <img src= "https://www.visitbritainshop.com/world/~/media/15daed7dd5654bb1a4ccc92aecc33046.ashx?as=0&h=349&w=620" class = {customClass} alt = "Responsive image"></img>
        )
    }
}