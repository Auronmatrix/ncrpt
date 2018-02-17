const tape = require('tape')

tape('rot13', t => {
  const input = 'nopqrstuvwxyzabcdefghijklm'
  const output = require('./lib/rot13')(input)

  t.equal(output, 'abcdefghijklmnopqrstuvwxyz', 'rot 13 shift')
  t.end()
})

tape('rot13 advanced', t => {
  const input = 'Jul qvq gur puvpxra pebff gur ebnq? Gb trg gb gur bgure fvqr!'
  const output = require('./lib/rot13')(input)

  t.equal(output, 'Why did the chicken cross the road? To get to the other side!', 'rot 13 shift')
  t.end()
})

tape('shift 3', t => {
  const input = 'XYZABCDEFGHIJKLMNOPQRSTUVW'
  const output = require('./lib/shift')(3)(input)

  t.equal(output, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'shift by 3')
  t.end()
})
