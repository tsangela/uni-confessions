var express = require('express');
var router = express.Router();

// header fields
const CONTENT_TYPE = 'Content-Type';
const APPLICATION_JSON = 'application/json';

// mongo
const MongoClient = require('mongodb').MongoClient;
const CONNECTION_STRING = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wz7vl.mongodb.net/Sandbox?retryWrites=true&w=majority';
const DB_NAME = 'messageBoard';
const COLL_NAME = 'users';

const STRING_SORTED_KEYS = '_id,age,university,username';

const toSortedString = (array) => array.sort().toString();

MongoClient.connect(CONNECTION_STRING, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);

  const db = client.db(DB_NAME);
  const usersCollection = db.collection(COLL_NAME);
  console.log(`Connected to ${DB_NAME} ${COLL_NAME}`);

  /* GET users listing. */
  router.get('/', (req, res, next) => {
    usersCollection.find().toArray()
      .then(users => {
        res.setHeader(CONTENT_TYPE, APPLICATION_JSON);
        res.send(users);
      })
      .catch(err => console.error(err));
  });

  /* GET user with username. */
  router.get('/:username', (req, res, next) => {
    usersCollection.find({ 'username': req.params.username }).toArray()
      .then(user => {
        res.setHeader(CONTENT_TYPE, APPLICATION_JSON);
        res.send(user);
      })
      .catch(err => console.error(err));
  });

  /* POST user. */
  router.post('/', (req, res, next) => {
    const user = req.body;
    console.log(user);
    console.log(toSortedString(Object.keys(user)));
    if (user && toSortedString(Object.keys(user)) === STRING_SORTED_KEYS) {
      console.log('yup');
      // messagesCollection.insertOne(user)
      //   .then(message => {
      //     res.setHeader(CONTENT_TYPE, APPLICATION_JSON);
      //     res.send(user);
      //   })
      //   .catch(err => console.error(err));
    }
    res.send(user);
  }); 
});

module.exports = router;
