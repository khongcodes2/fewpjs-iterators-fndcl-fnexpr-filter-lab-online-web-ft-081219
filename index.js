// Code your solution here
function findMatching(array, string) {
  return array.filter(n => {
    return n.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(array, string) {
  return array.filter(name => {
    return name.startsWith(string)
  });
}

function matchName(array, string) {
  return array.filter(driver => {
    return driver.name === string
  })
}