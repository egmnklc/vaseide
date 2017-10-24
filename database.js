const fs = require('fs');

exports.save = (data) => {
  fs.appendFile("data.json", JSON.stringify(data));
};