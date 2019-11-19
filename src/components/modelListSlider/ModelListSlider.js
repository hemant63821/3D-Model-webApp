import React, { Component, Fragment } from 'react'
import './ModelListSlider.scss'
import Slider from 'react-slick'
import ModelCard from '../../components/modelCard/ModelCard'
import { SLIDER_SETTINGS } from '../../core/constants/sliderSettings'

class ModelListSlider extends Component {
    render() {
        const { category, models } = this.props
        console.log('check models', models)
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="text-center">{category}</h2>
                    <div className="card" id="modelCardLink">
                        <div className="card-body cardConatiner" id="modelSlider">
                            <div className="text-center">
                                <Slider {...SLIDER_SETTINGS} className="slider">
                                    {
                                        models.length ? (models.map(model => {
                                            return (
                                                <ModelCard thumbImg={model.thumb} thumbAlt={model.thumb} name={model.name} key={model.obj}></ModelCard>
                                            );
                                        })) : <Fragment />
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModelListSlider;