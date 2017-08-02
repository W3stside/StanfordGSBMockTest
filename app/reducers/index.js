import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const testAnswers = (
    state = {
        fetching: false,
        fetched: false,
        error: null,
        testAnswers: []
    },
    action) => {
    switch(action.type) {
        case 'TEST_ANSWERS_FETCHING':
            return {
                ...state,
                fetching: true
            };
        case 'TEST_ANSWERS_FETCHED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                testAnswers: action.payload
            };
        case 'TEST_ANSWERS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const users = (
    state = {
        answerChoices: [],
        clickCount: 0
    },
    action) => {
    switch (action.type) {
        case 'ANSWER_CHOICE':
            return {
                ...state,
                answerChoices: [...state.answerChoices, action.payload],
                clickCount: state.clickCount + 1
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    routing,
    testAnswers,
    users
});

export default rootReducer;
