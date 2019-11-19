const baseUrl = "http://localhost:4000";

export const API_ENDPOINTS = {
    ANIMALS: {
        GET_ANIMALS: `${baseUrl}/api/animal/`,
        GET_ANIMAL: `${baseUrl}/api/animal/<ANIMAL_ID>`
    },
    FOODS: {
        GET_FOODS: `${baseUrl}/api/food/`,
        GET_FOOD: `${baseUrl}/api/food/<FOOD_ID>`
    },

    FURNITURES: {
        GET_FURNITURES: `${baseUrl}/api/furniture/`,
        GET_FURNITURE: `${baseUrl}/api/furniture/<FURNITURE_ID>`
    },
    NATURES: {
        GET_NATURES: `${baseUrl}/api/nature/`,
        GET_NATURE: `${baseUrl}/api/nature/<NATURE_ID>`
    },
    TECHS: {
        GET_TECHS: `${baseUrl}/api/tech/`,
        GET_TECH: `${baseUrl}/api/tech/<TECH_ID>`
    },
    TRANSPORTS: {
        GET_TRANSPORTS: `${baseUrl}/api/transport/`,
        GET_TRANSPORT: `${baseUrl}/api/transport/<TRANSPORT_ID>`
    }
}