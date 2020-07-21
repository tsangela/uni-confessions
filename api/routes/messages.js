const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const { CONNECTION_STRING, DB_NAME } = require("./utils/constants");
const { isValidMessage, clean } = require("./utils/helpers");

// express
const router = express.Router();

// mongo
const COLL_NAME = "messages";
const STRING_SORTED_KEYS = "_id,age,date,score,text,university,username";

MongoClient.connect(
  CONNECTION_STRING,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);

    const db = client.db(DB_NAME);
    const messagesCollection = db.collection(COLL_NAME);
    console.log(`Connected to ${DB_NAME} ${COLL_NAME}`);

    /* GET - retrieve messages listing. */
    router.get("/", (req, res, next) => {
      // retrieve all messages
      messagesCollection
        .find()
        .toArray()
        .then((messages) => res.status(200).json(messages))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* GET - retrieve messages by username. */
    router.get("/username/:username", (req, res, next) => {
      // filter by username
      messagesCollection
        .find({ username: req.params.username })
        .toArray()
        .then((messages) => res.status(200).json(messages))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* POST - add message. */
    router.post("/", (req, res, next) => {
      // request body
      const body = req.body;

      // validate message
      if (!isValidMessage(body, STRING_SORTED_KEYS)) {
        // 400 Bad Request
        return res
          .status(400)
          .json({ errorMessage: "Invalid message format." });
      }

      // trim whitespaces and run filter
      const text = clean(body.text);
      const message = { ...body, text };

      // insert into database
      messagesCollection
        .insertOne(message)
        // 201 Created
        .then(() => res.status(201).json(message))
        // 500 Internal Server Error
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* POST - update message score. */
    router.post("/:_id/score", (req, res, next) => {
      const _id = req.params._id;
      const body = req.body;
      const score = body && parseInt(body.score);
      if (typeof score === "number") {
        // update message in database
        messagesCollection
          .updateOne({ _id }, { $set: { score } })
          .then(() => res.status(200).json({ score }))
          .catch((err) => res.status(500).json({ errorMessage: err.message }));
      } else {
        // 400 Bad Request
        return res.status(400).json({ errorMessage: "Invalid score." });
      }
    });

    /* DELETE - delete message by id. */
    router.delete("/:_id", (req, res, next) => {
      const _id = req.params._id;

      // delete by id
      messagesCollection
        .deleteMany({ _id: _id })
        .then((deleteRes) => {
          // number of messages deleted
          const count = deleteRes.deletedCount;
          switch (count) {
            case 0:
              // no such message,
              return res
                .status(404)
                .json({ errorMessage: `Message '${_id}' not found.` });
            case 1:
              // successfully deleted one matching message
              return res.status(200).json(count);
            default:
              // shouldn't get here
              return res
                .status(500)
                .json({ errorMessage: `Deleted ${count} messages.` });
          }
        })
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });

    /* DELETE - delete all messages. */
    router.delete("/", (req, res, next) => {
      // delete everything
      messagesCollection
        .deleteMany()
        .then((deleteRes) => res.status(200).json(deleteRes.deletedCount))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    });
  }
);

module.exports = router;
