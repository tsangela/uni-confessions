const BASE_URL = 'http://localhost:9000';

const MESSAGES_PATH = '/messages';

const USERS_PATH = '/users';

const fetchJsonFromServer = (path) =>
  fetch(`${BASE_URL}${path}`)
    .then((res) => res.json())
    .catch((err) => err);

export const getAllMessages = () => fetchJsonFromServer(MESSAGES_PATH);

export const getMessagesByUser = (username) =>
  fetchJsonFromServer(`${MESSAGES_PATH}/${username}`);
