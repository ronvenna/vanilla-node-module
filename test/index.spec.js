//Import chai
let chai = require('chai');
let path = require('path');

//Tell chai what it should use
chai.should();

//Import our Test Module
let Test = require(path.join(__dirname, '../src/index.js'));


describe('test', () => {
  describe('#root', () => {
    let test;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      test = new Test();
    });

    it('returns the number given', () => {
      test.returnInt(3).should.equal(3);
      test.returnInt(7).should.not.equal(3);
    });

  });
});