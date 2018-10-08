// DO WHATEVER YOU WANT HERE
let a = 0;
const createEnumerableProperty = () => {
};
const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    set: (propertyValue) => this.propertyValue = propertyValue,
    get: () => this.propertyValue
   });
  return propertyName;
};
const createProtoMagicObject = () => {
  function foo() {};
  let obj = foo;
  obj.__proto__ = obj.prototype;
  return obj;
};
const incrementor = () => {
  let increment = () => {
    a++;
    return increment;
  }

  increment.valueOf = () => {
    return ++a;
  }

  return increment
};

let inc = 0;
const asyncIncrementor = () => {
  return new Promise( (resolve) => resolve(++inc) );
};

function *createIncrementer() {
  let inc = 0;
  while(true) {
    yield ++inc;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise( function(resolve) {
    setTimeout(() => resolve(param), 1200);
  });
};
const getDeepPropertiesCount = (obj) => {
  let tmp = obj;
  let count = 0;
  let changes = 1;
  while(changes) {
    changes = 0;
    for (let i in tmp) {
      count++;
    }
    for (let i in tmp) {
      if (typeof tmp[i][i] == 'object') {
        for (let j in tmp[i]) {
          count++;
        }
        tmp = tmp[i][i];
        changes++;
        break;
      }
    }
  }
  return count;
};
const createSerializedObject = () => {
  return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => { return arr.sort() };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
