import GlobalActionTypes from 'redux/global/global.types';

/*************************************************/

const INITIAL_STATE = {
    loading: false,
    toggleWidth: 'false'
}

/*************************************************/

const globalReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case GlobalActionTypes.TOGGLE_WIDTH:
            return {
                ...state,
                toggleWidth: action.payload
            };
        case GlobalActionTypes.LOADING_START:
            return {
                ...state,
                loading: true
            };
        case GlobalActionTypes.LOADING_STOP:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}

/*************************************************/

export default globalReducer;

/*************************************************/
