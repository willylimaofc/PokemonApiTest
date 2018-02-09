let chai = require('chai');
let expect = require('chai').expect;
let pokemonSchema = require('../schemas/pokemon-schema.js');

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

describe('Contract Pokemon Test.',  function() {
  it('Validate pokemon contract.', async function() {
    const resp = await chai.request('https://pokeapi.co/api/v2/').get('pokemon/charmander');
    expect(resp).to.have.status(200);
    expect(resp.body).to.be.jsonSchema(pokemonSchema);
  });
});
