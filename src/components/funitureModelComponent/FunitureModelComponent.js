import React, { Component } from 'react'
import { getFurnitures } from '../../redux/actions/allFurnitureAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class FurnitureModelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getFurnitures())
    }

    render() {

        const { furnitures } = this.props
        console.log('check furn ', furnitures)
        return (
            <ModelSlider category={'Furnitures'} models={furnitures}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    furnitures: state.allFurnitures.furnitures,
    isLoading: state.allFurnitures.isLoading
})

export default connect(mapStateToProps)(FurnitureModelComponent)