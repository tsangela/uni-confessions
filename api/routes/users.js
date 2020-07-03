const { CONNECTION_STRING, DB_NAME } = require("./utils/constants");
const { isValidItem } = require("./utils/helpers");
const MongoClient = require("mongodb").MongoClient;

var express = require("express");
var router = express.Router();

// mongo
const COLL_NAME = "users";
const STRING_SORTED_KEYS = "age,university,username";

MongoClient.connect(
  CONNECTION_STRING,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);

    const db = client.db(DB_NAME);
    const usersCollection = db.collection(COLL_NAME);
    console.log(`Connected to ${DB_NAME} ${COLL_NAME}`);

    /* GET users listing. */
    router.get("/", (req, res, next) => {
      // retrieve all users
      usersCollection
        .find()
        .toArray()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* GET user with username. */
    router.get("/:username", (req, res, next) => {
      // filter by username
      usersCollection
        .find({ username: req.params.username })
        .toArray()
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* POST user. */
    router.post("/", (req, res, next) => {
      const user = req.body;

      // validate user model
      if (!isValidItem(user, STRING_SORTED_KEYS)) {
        // 400 Bad Request
        return res
          .status(400)
          .json({ errorMessage: "Invalid message format." });
      }

      // insert into database
      usersCollection
        .insertOne(user)
        // 201 Created
        .then((user) => res.status(201).json(user))
        // 500 Internal Server Error
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });
  }
);

module.exports = router;
