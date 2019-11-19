import React, { Component } from 'react';

class ModelCard extends Component {


    render() {
        const { thumbImg, thumbAlt, name, key } = this.props
        return (
            <div className="modelCard" id="modelCardLink" key={key}>
                <div className="card h-100">
                    <div className="card-body text-center">
                        <img src={thumbImg} alt={thumbAlt} className="modelLogo" />
                        <div className="w-100 text-uppercase font16 text-center" >{name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModelCard;