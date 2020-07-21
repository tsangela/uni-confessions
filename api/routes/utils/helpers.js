const { AGE_RANGES, UNIVERSITIES, ALLOWED_SCORES } = require("./constants");

// List from https://github.com/RobertJGabriel/Google-profanity-words
const filter = require("profanity-filter");
const words = require("./words.json");

// set up filter
filter.setReplacementMethod("stars");
words.blacklist.forEach((word) => filter.addWord(word));

const clean = (string) => {
  let trimmed = string.trim();
  return filter.clean(trimmed);
};

const toSortedKeysString = (obj) => Object.keys(obj).sort().toString();

const isValidItem = (item, expectedKeys) => {
  return item && toSortedKeysString(item) === expectedKeys;
};

const isValidMessage = (message, expectedKeys) => {
  return (
    isValidItem(message, expectedKeys) &&
    AGE_RANGES.includes(message.age) &&
    UNIVERSITIES.includes(message.university) &&
    message.score === 0
  );
};

const isValidScore = (score) => ALLOWED_SCORES.includes(score);

module.exports = {
  clean,
  toSortedKeysString,
  isValidItem,
  isValidMessage,
  isValidScore,
};
