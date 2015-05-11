var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var winston = require('winston');
var _ = require('lodash');

describe('Routing', function() {
  var url = 'http://192.168.1.106:8000/';

  before(function(done) {
    //TODO: Make mongoose config string external
    mongoose.connect('mongodb://localhost:27017/koh');							
    done();
  });
  
  // Ensure AP is up at all
  describe('Entry point', function() {
    it('should contain body: API Entry', function(done) {
    request(url).get('api')
        // end handles the response
    	.end(function(err, res) {
              console.log('got ' + JSON.stringify(res.body));
              console.log('status: '  + res.status);
              if (err) {
                console.log('Got err');
                throw err;
              }
              JSON.stringify(res.body).toLowerCase().indexOf('api entry').should.be.above(-1);
              res.status.should.be.equal(200);
              done();
            });
        });
    });


  // Get User List
  describe('Entry point', function() {
    it('should have at least one user named ben', function(done) {
    request(url).get('api/users')
        // end handles the response
      .end(function(err, res) {
              console.log('got ' + JSON.stringify(res.body));
              console.log('status: '  + res.length);
              if (err) {
                console.log('Got err');
                throw err;
              }
              res.status.should.be.equal(200);
              var benObj = _.find(res.body, {'user':'ben'});
              benObj.should.be.an('object');             
              done();
            });
        });
    });
});
