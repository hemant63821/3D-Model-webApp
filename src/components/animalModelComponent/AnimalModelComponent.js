import React, { Component } from 'react'
import { getAnimals } from '../../redux/actions/allAnimalAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class AnimalModelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getAnimals())
    }

    render() {
        const { animals } = this.props
        return (
            <ModelSlider category={'Animals'} models={animals}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    animals: state.allAnimals.animals,
    isLoading: state.allAnimals.isLoading
})

export default connect(mapStateToProps)(AnimalModelComponent)