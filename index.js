const parser = require('note-parser');
const families = require('./families');
const names = require('./names');
const homepage = require('./package').homepage;

module.exports = {
  parser, families, homepage,
  instruments: names.map((name, midi) => ({
    midi, name,
    family: families[~~(midi / 16)],
    formats: ['mp3', 'ogg'],
    notes: {
      first: 21,
      last: 109,
    },
  })),
}
