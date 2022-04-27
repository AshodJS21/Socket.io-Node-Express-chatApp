const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    date:moment().format("h:mm a"),
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
