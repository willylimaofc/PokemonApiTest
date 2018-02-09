let chai = require('chai');
let expect = require('chai').expect;
let assert = require('chai').assert;
let pokemonUrl = 'https://pokeapi.co/api/v2/';

chai.use(require('chai-http'));

let venusaurModel = {
  id: 3,
  name: 'venusaur'
}

describe('GET /pokemon', function() {

  it('GET pokemon/{id}', async function() {
    const resp = await chai.request(pokemonUrl).get(`pokemon/${venusaurModel.id}`);
    expect(resp).to.have.status(200);
    expect(resp).to.be.json;
    expect(resp.body.name).to.be.equal(venusaurModel.name);
  });

  it('GET pokemon/{name}', async function() {
    const resp = await chai.request(pokemonUrl).get(`pokemon/${venusaurModel.name}`);
    expect(resp).to.have.status(200);
    expect(resp).to.be.json;
    expect(resp.body.name).to.equal(venusaurModel.name);
  });

  it('GET pokemon/{id} with a inexistent id', function(done) {
    chai.request(pokemonUrl).get(`pokemon/5000`).end(function(err, resp) {
      expect(resp).to.have.status(404);
      expect(resp).to.be.json;
      expect(err).to.not.null;
      expect(resp.body.detail).to.equal('Not found.');
      done();
    });
  });

  it('GET pokemon/{name} with a inexistent name', function(done) {
    chai.request(pokemonUrl).get(`pokemon/agumon`).end(function(err, resp) {
      expect(resp).to.have.status(404);
      expect(resp).to.be.json;
      expect(err).to.not.null;
      expect(resp.body.detail).to.equal('Not found.');
      done();
    });
  });
});
