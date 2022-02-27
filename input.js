// setup interface to handle user input from stdin

const { stdout, stdin } = require("process");
const { moveUpKey, moveLeftKey, moveDownKey, moveRightKey, messageKey1, messageKey2, controlC } = require("./constants");
let connection;
//declaring our main function for input data, here we declare
//the necessary parameters and logic with a callback to our
//handleUserInput function
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
//declaring a callback function to assign data to input keys
const handleUserInput = function (data) {
  if (data === controlC) {
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
  if (data === messageKey1) {
    connection.write("Say: You've got this!");
  }
  if (data === messageKey2) {
    connection.write("Say: You're killing it!");
  }
};

module.exports = {
  setupInput,
};