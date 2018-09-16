import { initialState } from './store'

const reducer = (state = initialState, action) => {
    switch (action.type){
    case 'EDIT_STATUS' : {
        return {
            details: {
                ...state.details,
                status: action.payload.status 
            }
        }
    }

    case 'EDIT_LOG' : {
        return {
            details: {
                ...state.details,
                logs : action.payload.logs
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

    case 'FILTERED_CARD' : {
        return {
            details: {
                ...state.details,
                status: action.payload.status
            }
        }
    }

    case 'SHOW_CARD' : {
        return {
            details: {
                ...state.details,
                name : action.payload.name,
                status : action.payload.status,
                logs : action.payload.logs
            }
        }
    }
    default :
        return state
    }
}

export default reducer