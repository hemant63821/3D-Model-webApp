
import React, { Component } from 'react'
import { getTransports } from '../../redux/actions/allTransportAction'
import ModelSlider from '../../components/modelListSlider/ModelListSlider'
import { connect } from 'react-redux'

class TransportModelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(getTransports())
    }

    render() {
        const { transport } = this.props
        return (
            <ModelSlider category={'Transport'} models={transport}></ModelSlider>
        )
    }
}

const mapStateToProps = (state) => ({
    transport: state.allTransport.transports,
    isLoading: state.allTransport.isLoading
})

export default connect(mapStateToProps)(TransportModelComponent)