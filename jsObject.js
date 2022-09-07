'use strict';

const testObj = {
  name: "John",
  address: "USA"
}

var testObj2 = {
  name: "David",
  address: "UK"
}


Object.freeze(testObj);
testObj.name = "Jennifer";

console.log(testObj.name);
