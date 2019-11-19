import React, { Component } from "react";
import './ModelListing-Container.scss'


import AnimalModelComponent from '../components/animalModelComponent/AnimalModelComponent'
import FoodModelComponent from '../components/foodModelComponent/FoodModelComponent'
import FurnitureModelComponent from '../components/funitureModelComponent/FunitureModelComponent'
import NatureModelComponent from '../components/natureModelComponent/NatureModelComponent'
import TechModelComponent from '../components/techModelComponent/TechModelComponent'
import TransportModelComponent from '../components/transportModelComponent/TransportModelComponent'

class ModelListingContainer extends Component {

    render() {
        return (
            <div className="page-content grey-bg">
                <div className="modelContainer">
                    <AnimalModelComponent></AnimalModelComponent>
                    <FoodModelComponent></FoodModelComponent>
                    <FurnitureModelComponent></FurnitureModelComponent>
                    <NatureModelComponent></NatureModelComponent>
                    <TechModelComponent></TechModelComponent>
                    <TransportModelComponent></TransportModelComponent>
                </div>
            </div>
        )
    }
}

export default ModelListingContainer;