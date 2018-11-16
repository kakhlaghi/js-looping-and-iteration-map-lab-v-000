// Code your solution in this file.

function lowerCaseDrivers(someArray){
  return someArray.map(function(driver){
    return driver.toLowerCase()
  })
}


function nameToAttributes(someArray){
  return someArray.map(function(driver){
    return `${someArray[firstname]} is from ${someArray[name]}.`
  })
}
