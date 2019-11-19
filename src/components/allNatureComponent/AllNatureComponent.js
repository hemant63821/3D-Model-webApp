import React, { Component } from 'react'
import { getNatures } from '../../redux/actions/allNatureAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class AllNatureComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getNatures())
    }

    render() {
        const { nature } = this.props
        return (
            <ModelSlider category={'Animals'} models={nature}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    nature: state.allNature.nature,
    isLoading: state.allNature.isLoading
})

export default connect(mapStateToProps)(AllNatureComponent)