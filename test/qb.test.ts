import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/qb', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/qb')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(4);
      });
  });

  it('should include question', () => {
    return chai.request(app).get('/api/v1/qb')
      .then(res => {
        let Question = res.body.find(question => question.Question_Title === 'What is the capital of India?');
        expect(Question).to.exist;
        expect(Question).to.have.all.keys([
          "_id",
          "Question_Title",
          "Question_Desc",
          "Opt_A",
          "Opt_B",
          "Opt_C",
          "Opt_D",
          "Answer",
          "Image_Path"
        ]);
      });
  });

});
