import GlobalActionTypes from 'redux/global/global.types';


// toggle width
export const setToggleWidth = data => ({
    type: GlobalActionTypes.TOGGLE_WIDTH,
    payload: data
})

// Loading
export const loadingStart = () => ({
    type: GlobalActionTypes.LOADING_START,
});

export const loadingStop = () => ({
    type: GlobalActionTypes.LOADING_STOP,
});


