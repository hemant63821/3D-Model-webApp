import React, { Component } from 'react'
import { getFoods } from '../../redux/actions/allFoodsAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class FoodModelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getFoods())
    }

    render() {
        const { foods } = this.props
        console.log('check')
        return (

            <ModelSlider category={'Food'} models={foods}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    foods: state.allFoods.foods,
    isLoading: state.allFoods.isLoading
})

export default connect(mapStateToProps)(FoodModelComponent)