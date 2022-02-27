//this is our main play file to run the client side of the game
//where we require and call the necessary files and functions
const { connect } = require("./client");
const { setupInput } = require("./input");
const instance = connect();
setupInput(instance);