'use strict';

const port = process.env.PORT || 3000;
process.env.MONGODB_URI = 'mongodb://localhost/recipetest';

const request = require('superagent');
const expect = require('chai').expect;
const Recipe = require('../model/recipe');


const server = require('../index.js');

const URL = `http://localhost:${port}`;


const testRecipe = {
  name: 'hamburgers',
  mealType: 'lunch',
  origin: 'NC'
};

describe('testing route /api/recipe', function() {
  before(function() {
    server.listen(port, () => console.log(`server started on ${port}`));

  })
  describe('testing POST request', function() {
    describe('with valid body', function() {
      after( done => {
        if(this.tempRecipe) {
          Recipe.remove({})
          .then(() => done())
          .catch(done);
          return;
        }
        done();
      });
      it('should return a recipe', done => {
        request.post(`${URL}/api/recipes`)
        .send(testRecipe)
        .end((err, res) => {
          if(err) return done(err);
          expect (res.status).to.equal(200);
          expect(res.body.name).to.equal('hamburgers');
          expect(res.body.mealType).to.equal('lunch');
          expect(res.body.origin).to.equal('NC');
          this.tempRecipe = res.body;
          done();
        });
      });
    });
  });
});