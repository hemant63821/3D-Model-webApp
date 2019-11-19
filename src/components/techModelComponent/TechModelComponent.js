
import React, { Component } from 'react'
import { getTechs } from '../../redux/actions/allTechAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class TechModelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getTechs())
    }

    render() {
        const { tech } = this.props
        return (
            <ModelSlider category={'Technology'} models={tech}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    tech: state.allTechs.techs,
    isLoading: state.allTechs.isLoading
})

export default connect(mapStateToProps)(TechModelComponent)