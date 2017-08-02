// + Plug in .ENV file for those super secrets ψ(｀∇´)ψ
require('dotenv').config();

import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
// Async Requester
import axios from 'axios';

// //////////////////////////////////////////////////////
// ======== cityActions + cityState
// //////////////////////////////////////////////////////
describe('GET testAnswers from db + API', () => {
    it('It should return a non empty Array', () => {
        const promise = Promise.resolve(axios.get('http://localhost:3000/api/testAnswers'))
            .then( resp => {
                const testAnswers = resp.data[0].testAnswers;
                console.log(testAnswers);
                return testAnswers;
            })
            .catch( err => {
                throw err;
            });
        return expect(promise).to.eventually.be.an('array').that.is.not.empty;
    });
});

describe('FAIL a test to GET testAnswers from db + API: 404 error', () => {
    it('It should return a 404 error', () => {
        const promise = Promise.resolve(axios.get('http://localhost:3000/api/testsAnswers'))
            .then( resp => {
                const testAnswers = resp.data[0].testAnswers;
                console.log(testAnswers);
                return testAnswers;
            })
            .catch( err => {
                throw err;
            });
        return expect(promise).to.eventually.be.an('error').that.is.not.empty;
    });
});
