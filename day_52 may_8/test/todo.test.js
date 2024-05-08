let chai = require('chai')
let chaiHttp = require('chai-http');
const { myURL } = require('./config');
chai.use(chaiHttp);

describe('Testing Todo CRUD', () => {
    let myRequest;

    beforeEach(()=>{
        myRequest = chai.request(myURL);
    })
    afterEach(()=>{
        myRequest = null;
    })

    it('should return 404 for /abc route', function (done) {
        myRequest
            .get('/abc')
            .then((res) => {
                chai.expect(res).to.have.status(404);
                done();
            }).catch(done)
    });
    it('should return 200 and data for /api/todos route', function (done) {
        myRequest
            .get('/api/todos')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('array');
                chai.expect(res.body).to.have.lengthOf(4);
                done();
            });
    });



})