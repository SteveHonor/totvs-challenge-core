process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Defaulting = require('../api/models/defaulting');
let User = require('../api/models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Defaulting', () => {
  beforeEach((done) => {
    Defaulting.deleteMany({}, (err) => {
      done();
    });
  });

  beforeEach((done) => {
    User.create({
      'name': 'Dev Totvs',
      'email': 'dev@totvs.com.br',
      'password': '123123'
    }, () => {
      done();
    })
  });

  describe('/GET defaultings', () => {
    beforeEach((done) => {
      Defaulting.create({
        'name': 'a',
        'price': 30.0,
        'dueDate': new Date()
      }, () => {
        done();
      },{
        'name': 'b',
        'price': 30.0,
        'dueDate': new Date()
      }, () => {
        done();
      })
    });

    it('it should GET all the defaulting', (done) => {
      chai.request(server)
      .post('/users/signin')
      .send({
        email: 'dev@totvs.com.br',
        password: '123123'
      })
      .end((err, res) => {
        chai.request(server)
        .get('/defaultings')
        .set('x-token', res.body.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.defaultings.docs.length.should.be.eql(2);
          done();
        });
      });
    });

    it('it should GET all the defaulting in page 2', (done) => {
      chai.request(server)
      .post('/users/signin')
      .send({
        email: 'dev@totvs.com.br',
        password: '123123'
      })
      .end((err, res) => {
        chai.request(server)
        .get('/defaultings?page=2')
        .set('x-token', res.body.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.defaultings.docs.length.should.be.eql(0);
          done();
        });
      });
    });

    it('it should GET the defaulting where name sorted asc', (done) => {
      chai.request(server)
      .post('/users/signin')
      .send({
        email: 'dev@totvs.com.br',
        password: '123123'
      })
      .end((err, res) => {
        chai.request(server)
        .get('/defaultings?order=name')
        .set('x-token', res.body.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.defaultings.docs.length.should.be.eql(2);
          res.body.defaultings.docs[0].name.should.be.eql('a')
          done();
        });
      });
    });

    it('it should GET the defaulting where name sorted desc', (done) => {
      chai.request(server)
      .post('/users/signin')
      .send({
        email: 'dev@totvs.com.br',
        password: '123123'
      })
      .end((err, res) => {
        chai.request(server)
        .get('/defaultings?order=-name')
        .set('x-token', res.body.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.defaultings.docs.length.should.be.eql(2);
          res.body.defaultings.docs[0].name.should.be.eql('b')
          done();
        });
      });
    });

    it('it should GET the defaulting where name is searched', (done) => {
      chai.request(server)
      .post('/users/signin')
      .send({
        email: 'dev@totvs.com.br',
        password: '123123'
      })
      .end((err, res) => {
        chai.request(server)
        .get('/defaultings?search=b')
        .set('x-token', res.body.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.defaultings.docs.length.should.be.eql(1);
          res.body.defaultings.docs[0].name.should.be.eql('b')
          done();
        });
      });
    });
  });
});
