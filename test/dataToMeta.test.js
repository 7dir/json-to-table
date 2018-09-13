const test = require('ava')
const fixtures = require('./jsonToTable/fixtures')
const dataToMeta = require('../src/dataToMeta')
const Meta = require('../src/Meta')

test('simple data to meta', t => {
  const data = fixtures.data.simple[0]
  const meta = dataToMeta(data)
  t.deepEqual(meta, new Meta({
    order: ['a', 'b']
  }))
})

test('nested data to meta', t => {
  const data = fixtures.data.nested[0]
  const meta = dataToMeta(data)
  t.deepEqual(meta, new Meta({
    order: ['a', 'b'],
    mapping: {
      b: {
        inner: {
          order: ['c', 'd']
        }
      }
    }
  }))
})