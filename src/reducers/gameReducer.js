
const initialState = { engine_speed: 1, distance: 0, isFlying: false };

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DISTANCE':
            {
                if (state.isFlying) {
                    return {
                        ...state, distance: state.distance + state.engine_speed
                    }
                }
                else {
                    return {
                        ...state
                    }
                }
            }
        case 'SET_FLYING':
            {
                var s = action.input;
                return {
                    ...state, isFlying: s
                }
            }
        default:
            return state;
    }
}
export default gameReducer;