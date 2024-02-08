const initialData = {
    services: []
};

export const serviceReducer = (state = initialData, action) => {

    switch (action.type) {
        case 'GET_ALL_SERVICES': {
            return {
                ...state,
                services: action.payload
            }
        }
        default: return state
    }

}