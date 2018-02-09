const pokemonSchema = {

  type: 'object',
  required: ['sprites', 'moves', 'stats', 'types', 'species', 'game_indices', 'forms'],
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    base_experience: {
      type: 'integer'
    },
    height: {
      type: 'integer'
    },
    is_default: {
      type: 'boolean'
    },
    order: {
      type: 'integer'
    },
    weight: {
      type: 'integer'
    },
    abilities: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'object'
      }
    }
  }
}

module.exports = pokemonSchema
