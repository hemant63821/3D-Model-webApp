import { combineReducers } from "redux";
import allAnimals from './allAnimalReducer'
import allFoods from './allFoodReducer'
import allFurnitures from './allFurnitureReducer'
import allNature from './allNatureReducer'
import allTechs from './allTechReducer'
import allTransport from './allTransportReducer'

export default combineReducers({
    allAnimals,
    allFoods,
    allFurnitures,
    allNature,
    allTechs,
    allTransport
})