const CONNECTION_STRING = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wz7vl.mongodb.net/Sandbox?retryWrites=true&w=majority';

const DB_NAME = 'messageBoard';

const toSortedKeysString = (obj) => Object.keys(obj).sort().toString();

const isValidItem = (item, expectedKeys) => {
  console.log(item, toSortedKeysString(item), expectedKeys);
  return item && toSortedKeysString(item) === expectedKeys;
}

module.exports = {
  CONNECTION_STRING,
  DB_NAME,
  toSortedKeysString,
  isValidItem,
}