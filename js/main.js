// add scripts

console.log("sanity check!");

function getStudentName(obj){
  return obj.name;
}

function getTotalLetters(arr) {
  var total = 0;
  arr.forEach(function(i){
    total += i.length;
  })
  return total;
}

function createObject(str1, str2) {
  var obj = {};
  obj[str1] = str2;
  return obj;
}

function getNegativeIndex(array, index) {
  return array[array.length + index];
}

function removeCharacter(str, char) {
  var temp = str.split('').slice();
  for (var i = 0; i < temp.length; i++) {
    if (char === temp[i]) {
      temp.splice(i,1);
    }
  }
  return temp.join('');
}

function outputObject(obj) {
  var str = '';
  for (var i in obj) {
    str += i + " is " + obj[i] + ", ";
  }
  return str.slice(0,str.length-2);
}

function getVowels(str) {
  var vowels = ['a','e','i','o','u'];
  var results = [];
  for (var i = 0; i < vowels.length; i++) {
    if (str.indexOf(vowels[i]) !== -1) {
      results.push(vowels[i]);
    }
  }
  return results;
}

function captureTwins(arr) {
  for (var i = 0; i < arr.length; i+=2) {
    if (arr[i] !== arr[i+1]){
      return false;
    }
  }
  return true;
}

function testBooleanLogic(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return true;
    }
  }
  return false;
}

function getUniqueValues(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1){
      unique.push(arr[i]);
    }
  }
  return unique;
}

module.exports = {
  getStudentName: getStudentName,
  getTotalLetters: getTotalLetters,
  createObject: createObject,
  getNegativeIndex: getNegativeIndex,
  removeCharacter: removeCharacter,
  outputObject: outputObject,
  getVowels: getVowels,
  captureTwins: captureTwins,
  testBooleanLogic: testBooleanLogic,
  getUniqueValues: getUniqueValues
}
