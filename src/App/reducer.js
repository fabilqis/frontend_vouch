import { initialState } from './store'

const reducer = (state = initialState, action) => {
    switch (action.type){
    case 'EDIT_CARD' : {
        return {
            ...state,
            details: {
                ...state.details,
                editCard: action.payload
            }
        }
    }

    case 'ADD_CARD' : {
        return {
            ...state,
            details: {
                ...state.details,
                addCard: action.payload
            }
        }
    }

    case 'DELETE_CARD' : {
        return {
            ...state,
            details: {
                ...state.details,
                deleteCard: action.payload
            }
        }
    }

    case 'FILTERED_CARD' : {
        return {
            details: {
                ...state.details,
                status: action.payload.status
            }
        }
    }

    default :
        return state
    }
}

export default reducer