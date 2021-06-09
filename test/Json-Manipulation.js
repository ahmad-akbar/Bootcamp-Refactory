const Data1 = require('./data.json')

function getItemInMeetingRoom(inputData) {
  let results = []
  inputData.forEach(element => {
    if (element.placement.name === 'Meeting Room') {
      results.push(element)
    }
  })
  return results
}
console.log('==== TASK 1 ====', '\n', getItemInMeetingRoom(Data1));

function getAllElectronic(inputData) {
  let results = []
  inputData.forEach(element => {
    if (element.type === 'electronic') {
      results.push(element)
    }
  })
  return results
}
console.log('==== TASK 2 ====', '\n', getAllElectronic(Data1));

function getAllFuniture(inputData) {
  let results = []
  inputData.forEach(element => {
    element.tags.forEach(element2 => {
      if (element2 === 'furniture') {
        results.push(element)
      }
    })
  })
  return results
}
console.log('==== TASK 3 ====', '\n', getAllFuniture(Data1));

function getItemWithSpecificDate(inputData, inputDate) {
  let date = Date.parse(inputDate)
  let results = []
  inputData.forEach(element => {
    if (element.purchased_at === date) {
      results.push(element)
    }
  })
  return results
}
console.log('==== TASK 4 ====', '\n', getItemWithSpecificDate(Data1, '16 Januari 2020'));

function getItemWithSpecificColor(inputData, inputColor) {
  let results = []
  inputData.forEach(element => {
    element.tags.forEach(element2 => {
      if (element2 === inputColor) {
        results.push(element)
      }
    })
  })
  return results
}
console.log('==== TASK 5 ====', '\n', getItemWithSpecificColor(Data1, 'brown'));