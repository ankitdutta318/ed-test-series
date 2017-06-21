import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/tseries', () => {

    it('responds with JSON array', () => {
        return chai.request(app).get('/api/v1/tseries')
        .then(res => {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(2);
        });
    });

    it('should include test-series', () => {
        return chai.request(app).get('/api/v1/tseries')
            .then(res => {
                let testseries = res.body.find(tseries => tseries._id === '87fea43a893f645wd47fc59f');
                expect(testseries).to.exist;
                expect(testseries).to.have.all.keys([
                    "_id",
                    "testname",
                    "type",
                    "test_time",
                    "test_cost",
                    "ques_en",
                    "ques_hn"
                ]);
            });
    });
});

describe('GET api/v1/tseries/:id', () => {

  it('responds with single JSON object', () => {
    return chai.request(app).get('/api/v1/tseries/87fea43a893f645wd47fc59f')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('should return a Test Series', () => {
    return chai.request(app).get('/api/v1/tseries/87fea43a893f645wd47fc59f')
      .then(res => {
        expect(res.body.test.testname).to.equal('AIEEE Mock Test');
      });
  });

});