import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ACTIONS
import { answerChoice, fetchTestAnswers } from '../actions';
import {compose, lifecycle} from 'recompose';
// UTILS
import * as utils from '../utils/utils';
// scss
import { UI } from '../styles/UI.scss';
/* eslint react/prop-types: 0 */

const Questions = (props) => {
    const {testAnswers} = props.testAnswers;
    const {clickCount} = props.users;
    const numChoice = utils.randNoRepeat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(numChoice);
    // const variance = (click) => {
    //     if (click >= 5) {
    //         return click - 2;
    //     }
    //     return click;
    // };
    if (clickCount === 30) {
        return (
            <div>
                <h1> Your results are: </h1>
                { props.users.answerChoices.map(item => <h4>{item}</h4>) }
            </div>
        );
    }
    return (
        <div style={{display: 'inline-flex', flexFlow: 'column wrap'}}>
            <h1>{clickCount}</h1>
            {/* Answer 1 */}
            <button
                className={UI}
                onClick={() => props.answerChoice(testAnswers[clickCount % 5].name, (clickCount % 5))}
                style={{fontSize: 28}}>
                {testAnswers && testAnswers.length ? testAnswers[clickCount % 5].answers[numChoice()] : null}
            </button>
            {/* Answer 2
                className={UI}
                onClick={() => props.answerChoice(testAnswers[clickCount].answers[numChoice()])}
                style={{fontSize: 28}}>
                {testAnswers && testAnswers.length ? testAnswers[clickCount].answers[numChoice()] : null}
            </button>
            */}
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
    // Wrap in Class to provide LifeCycle Hooks
    lifecycle({
        componentDidMount() {
            // DISPATCH test FETCH
            this.props.fetchTestAnswers();
        }
    })
)(Questions);
