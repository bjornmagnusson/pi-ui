var app = require('../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var should = chai.should();

describe('GET /health', function() {
  it('should be available', function(done) {
    chai.request(app).get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done()
      })
  });
});
