const toSortedKeysString = (obj) => Object.keys(obj).sort().toString();

const isValidItem = (item, expectedKeys) => {
  return item && toSortedKeysString(item) === expectedKeys;
};

module.exports = {
  toSortedKeysString,
  isValidItem,
};
