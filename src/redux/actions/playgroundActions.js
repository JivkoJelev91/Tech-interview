import axios from 'axios'
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COUNT = 'GET_COUNT'
export const GET_FREQUENCE_NUMBERS = 'GET_FREQUENCE_NUMBERS';

const url = 'https://jsonplaceholder.typicode.com';

export const getComments = (...args) => dispatch => {
    const comments = args.map(arg => {
        return axios.get(`${url}/posts/${arg}/comments`)
            .then(comments => [...comments.data])
            .catch(err => console.log(err))
    });

    Promise.all([...comments]).then((values) => {
        const array = [].concat(...values);
        dispatch({
            type: GET_COMMENTS,
            payload: array
        });
        dispatch(frequense());
    });
}

export const getCountOfSelectedNumbers = count => dispatch => {
    return dispatch({ type: GET_COUNT, payload: count });
}

// Simulate most frequense numbers with math random
export const frequense = () => dispatch => {
    const nums = new Set();
    while (nums.size !== 12) {
        nums.add(Math.floor(Math.random() * 80) + 1);
    }
    dispatch({
        type: GET_FREQUENCE_NUMBERS,
        payload: [...nums]
    });
};

