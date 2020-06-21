const toSortedKeysString = (obj) => Object.keys(obj).sort().toString();

const isValidItem = (item, expectedKeys) => {
  console.log(item, toSortedKeysString(item), expectedKeys);
  return item && toSortedKeysString(item) === expectedKeys;
}

module.exports = {
  toSortedKeysString,
  isValidItem
}