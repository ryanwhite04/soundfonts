module.exports = require('./names').map((name, midi) => ({
  midi,
  name,
  family: require('./families')[~~(midi / 16)],
  path: `${__dirname}/${name}`,
  mp3: `${__dirname}/${name}/mp3.json`,
  ogg: `${__dirname}/${name}/ogg.json`,
}))
