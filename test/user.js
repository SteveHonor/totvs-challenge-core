process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../api/models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  it('it should GET all the user', (done) => {
    User.create({
      'name': 'Dev Totvs',
      'email': 'dev@totvs.com.br',
      'password': '123123'
    })

    chai.request(server)
    .post('/users/signin')
    .send({
      email: 'dev@totvs.com.br',
      password: '123123'
    })
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.user.name.should.be.eql('Dev Totvs');
      done();
    })
  })
})
