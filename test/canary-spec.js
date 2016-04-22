const chai = require('chai');

const should = chai.should();

describe('Canary test', () => {
  it('five should be a five', () => {
    'five'.should.be.equal('five');
  });
});
