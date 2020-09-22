import {
    GET_COMMENTS,
    GET_COUNT,
    GET_FREQUENCE_NUMBERS,
} from '../actions/playgroundActions';

const initialState = {
    comments: [],
    frequenseNumber: [],
    count: 0,
    loading: false,
};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload.sort((a, b) => a.id - b.id),
                loading: false,
            }
        case GET_FREQUENCE_NUMBERS:
            return {
                ...state,
                frequenseNumber: action.payload
            }
        case GET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default: return state;
    }
}