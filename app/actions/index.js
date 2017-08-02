import * as types from './types';
import axios from 'axios';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function fetchTestAnswers() {
    return function(dispatch) {
        dispatch({
            type: 'TEST_ANSWERS_FETCHING'
        });
        axios.get('http://localhost:3000/api/testAnswers')
            .then( resp => {
                const testAnswers = resp.data[0].testAnswers;
                dispatch({
                    type: 'TEST_ANSWERS_FETCHED',
                    payload: testAnswers
                });
            })
            .catch( err => {
                console.log(err);
                dispatch({
                    type: 'TEST_ANSWERS_REJECTED',
                    payload: err
                });
            });
    };
}

// Keeps track of user Answers and Clicks
export function answerChoice(answer) {
    return {
        type: 'ANSWER_CHOICE',
        payload: answer
    };
}