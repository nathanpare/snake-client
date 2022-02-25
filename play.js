const { connect } = require("./client");
const { setupInput } = require("./input");
const instance = connect()
setupInput(instance);