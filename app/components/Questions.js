import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ACTIONS
import { answerChoice, fetchTestAnswers } from '../actions';
import {compose, lifecycle, withProps} from 'recompose';
// UTILS
import * as utils from '../utils/utils';
// scss
import { UI } from '../styles/UI.scss';
/* eslint react/prop-types: 0 */

const Questions = (props) => {
    const {testAnswers} = props.testAnswers;
    const {clickCount} = props.users;
    const numChoice = utils.randNum();
    let otherDims = [];
    if(clickCount < 4) {
        otherDims.push(testAnswers[])
    }
    // variator from initial value
    const variance = () => {
        switch(clickCount) {
            case clickCount < 4:
                return (clickCount + 1);
            case clickCount === 4:
                return 0;
            default:
                return (clickCount + 1);
        }
    };
    console.log(variance());
    return (
        <div style={{display: 'inline-flex', flexFlow: 'column wrap'}}>
            {/* Answer 1 */}
            <button
                className={UI}
                onClick={() => props.answerChoice(testAnswers[clickCount].answers[numChoice])}
                style={{fontSize: 28}}>
                {testAnswers && testAnswers.length ? testAnswers[clickCount < 6 ? clickCount : 0].answers[numChoice] : null}
            </button>
            {/* Answer 2 */}
            <button
                className={UI}
                onClick={() => props.answerChoice(testAnswers[variance()].answers[numChoice])}
                style={{fontSize: 28}}>
                {testAnswers && testAnswers.length ? testAnswers[variance()].answers[numChoice] : null}
            </button>
        </div>
    );
};

// ///////////////////////////////////////////////
// ////////////////// LOGIC
// //////////////////////////////////////////////

Questions.propTypes = {
    testAnswers: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        testAnswers: state.testAnswers,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTestAnswers: () => dispatch(fetchTestAnswers()),
        answerChoice: (answer) => dispatch(answerChoice(answer))
    };
};

export default compose(
    // Connect State and Dispatch
    connect(mapStateToProps, mapDispatchToProps),
    // For testing props passing
    withProps({
        // testAnswers: [{answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}, {answers: 'ABC'}]
    }),
    // Wrap in Class to provide LifeCycle Hooks
    lifecycle({
        componentDidMount() {
            // DISPATCH test FETCH
            this.props.fetchTestAnswers();
        }
    })
)(Questions);
