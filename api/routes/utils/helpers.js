const CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sandbox-wz7vl.mongodb.net/Sandbox?retryWrites=true&w=majority`;

const toSortedKeysString = (obj) => Object.keys(obj).sort().toString();

const isValidItem = (item, expectedKeys) => {
  return item && toSortedKeysString(item) === expectedKeys;
};

module.exports = {
  CONNECTION_STRING,
  toSortedKeysString,
  isValidItem,
};
