const chai = require('chai');
const supertest = require('supertest');

const app = require('../app');

const should = chai.should();
const request = supertest(app);

describe('Body parser', () => {
  it('should be able to get query parameter', (done) => {
    request.get('/health')
      .query({hello: 'world'})
        .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        res.body.hello.should.be.equal('world');

        done();
      });
  });

  it('should be able to get body parameter', (done) => {
    request.post('/health')
      .send({hello: 'world'})
        .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        res.body.hello.should.be.equal('world');

        done();
      });
  });

  it('should be fine with no data passed in for get request', (done) => {
    request.get('/health')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });

  it('should be fine with no data passed in for post request', (done) => {
    request.post('/health')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        done();
      });
  });
});

describe('Sending a GET request to a endpoint that does not exist', () => {
  it('should return a 404 object', (done) => {
    request.get('/four-o-four')
      .expect(404)
      .end((err, res) => {
        if(err) return done(err);

        res.body.errors[0].status.should.be.equal('404');
        res.body.errors[0].title.should.be.equal('not found');
        res.body.errors[0].detail.should.be.equal('The route /four-o-four does not exist');

        done();
      });
  });
});
