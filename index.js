const parser = require('parser');
const families = require('./families');
const names = require('./names');

module.exports = {
  parser, families,
  instruments: name.map((name, midi) => {
    midi, name,
    family: families[~~(midi / 16)],
    path: `instruments/${name}`,
    mp3: `instruments/${name}/mp3.json`,
    ogg: `instruments/${name}/ogg.json`,
    notes: {
      first: 21,
      last: 109,
    },
  }),
}
