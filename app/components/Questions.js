import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ACTIONS
import { answerChoice, fetchTestAnswers } from '../actions';
import {compose, lifecycle} from 'recompose';
// UTILS
import * as utils from '../utils/utils';

/* eslint react/prop-types: 0 */

const Questions = (props) => {
    const {testAnswers} = props.testAnswers;
    const {answerChoices, clickCount} = props.users;
    // Picks a non repeating random number in the array
    const numChoice = utils.randNoRepeat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // Show results page if clickCount = 30
    if (clickCount === 30) {
        return (
            <div style={{fontSize: '200%'}}>
                <h1> Your results are: </h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Dimension</th>
                            <th>Score</th>
                        </tr>
                        {Object.keys(answerChoices).map(item => {
                            return (
                                <tr key={`${item}-tr`}>
                                    <td style={{backgroundColor: 'violet', padding: 15}}>{item}</td>
                                    <td style={{backgroundColor: 'skyblue', padding: 15}}>{answerChoices[item]}</td>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    // Main Render of Questions
    if (testAnswers && testAnswers.length) {
        return (
            <div style={{display: 'inline-flex', flexFlow: 'column wrap', width: '50%'}}>
                {/* Answer 1 */}
                <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center', margin: 15, padding: 15, width: '100%', boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)'}}>
                    <h1>{testAnswers[clickCount % 6].answers[numChoice()]}</h1>
                    <button
                        onClick={() => props.answerChoice(testAnswers[clickCount % 6].name, (clickCount % 5))}
                        style={{fontSize: 28}}>
                        Choose
                    </button>
                </div>
                {/* Answer 2
                <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center', margin: 15, padding: 15, width: '100%', boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)'}}>
                    <h1>{testAnswers[clickCount % 6].answers[numChoice()]}</h1>
                    <button
                        onClick={() => props.answerChoice(testAnswers[clickCount].answers[numChoice()])}
                        style={{fontSize: 28}}>
                        {clickCount < 4 ? testAnswers[clickCount + 1].answers[numChoice()]
                        : clickCount < 9 ? testAnswers[clickCount - 3].answers[numChoice()]
                        : testAnswers[clickCount].answers[numChoice()]}
                    </button>
                </div>*/}
            </div>
        );
    }

    return null;
};

// ///////////////////////////////////////////////
// ////////////////// LOGIC /////////////////////
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

// Wrap Component in HoC and pass lifecycle methods to avoid Class
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
