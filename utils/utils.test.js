const utils = require('./utils')
const expect = require('expect')

test('should add two numbers', () => {
  var res = utils.add(33, 11)
  expect(res).toBe(44)
})

test('should async add two numbers', done => {
  utils.asyncAdd(33, 11, sum => {
    expect(sum).toBe(44)
    done()
  })
})

test('should square a number', () => {
  var res = utils.square(5)
  expect(res).toBe(25)
})

test('should include firstname and lastname', () => {
  var res = utils.setName({ age: 24 }, 'Ema Lorenzo')
  expect(res).toMatchObject({
    firstName: 'Ema',
    lastName: 'Lorenzo'
  })
})