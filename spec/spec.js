var code = require('../js/main.js');


describe('getStudentName', function() {
  it('Takes an object and returns the name property of the object', function() {
    expect(code.getStudentName({name: 'Michael', age: 27 })).toEqual('Michael');
  });
});
describe('getTotalLetters', function() {
  it('Takes an array and returns the total length of all strings in the array', function() {
    expect(code.getTotalLetters(['javascript', 'is', 'not', 'python'])).toEqual(21);
  });
});
describe('createObject', function() {
  it('takes two arguments and returns a new object with a key of the first argument and the value of the second argument', function() {
    expect(code.createObject('city', 'Boulder')).toEqual({city: 'Boulder'});
  });
});
describe('getNegativeIndex', function() {
  it('takes an array and a negative number as arguments and returns the value from the array at the given negative index', function() {
    expect(code.getNegativeIndex(['a', 'b', 'c', 'd', 'e'],-3)).toEqual('c');
  });
});
describe('removeCharacter', function() {
  it('takes a string and a single character (string or integer) as arguments and returns the string with the characters removed', function() {
    expect(code.removeCharacter('javascript', 'a')).toEqual('jvscript');
  });
});
describe('outputObject', function() {
  it('takes an object as an argument and returns each key-value pair in the following format "key is value"', function() {
    expect(code.outputObject({john: 10, jerry: 11, jenny: 12 })).toEqual('john is 10, jerry is 11, jenny is 12');
  });
});
describe('getVowels', function() {
  it('takes a string as an argument and returns an array of all the vowels in the string', function() {
    expect(code.getVowels('javascripting')).toEqual(['a', 'i']);
  });
});
describe('captureTwins', function() {
  it('takes an array as an argument and returns true if every adjacent pair of items in the array is the same', function() {
    expect(code.captureTwins(['m', 'm', 'n', 'n', 's', 's'])).toEqual(true);
    expect(code.captureTwins(['m', 'm', 'n', 's', 's'])).toEqual(false);
  });
});
describe('testBooleanLogic', function() {
  it('takes an array of boolean values and returns true if any value is true', function() {
    expect(code.testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(code.testBooleanLogic([false, false, false])).toEqual(false);
  });
});
describe('getUniqueValues', function() {
  it('takes an array of strings, and returns a new array consisting of the unique values', function() {
    expect(code.getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(['m', 'n', 'r', 's']);
    expect(code.getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(['michael', 'ben', 'kerry']);
  });
});
