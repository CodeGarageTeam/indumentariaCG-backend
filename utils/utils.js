add = (a, b) => a + b
asyncAdd = (a, b, callback) => {
  setTimeout(() => callback(a + b), 1000)
}
square = a => a * a
setName = (user, fullName) => {
  var names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}

module.exports = {
  add,
  asyncAdd,
  square,
  setName
}

