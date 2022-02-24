// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  console.log(data);
  if (data === '\u0003') {
    process.exit();
  }
};

setupInput();

module.exports = {
  setupInput,
};