// setup interface to handle user input from stdin

const { stdout, stdin } = require("process");
const { moveUpKey, moveLeftKey, moveDownKey, moveRightKey } = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === moveUpKey) {
    connection.write("Move: up");
  }
  if (data === moveLeftKey) {
    connection.write("Move: left");
  }
  if (data === moveDownKey) {
    connection.write("Move: down");
  }
  if (data === moveRightKey) {
    connection.write("Move: right");
  }
  if (data === 'f') {
    connection.write("Say: You've got this!");
  }
  if (data === 'c') {
    connection.write("Say: You're killing it!");
  }
};

module.exports = {
  setupInput,
};