const { on } = require("events");
const net = require("net");
const { start } = require("repl");
const { ip, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    ip,
    port
  });
  console.log("Connecting ...");
  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Name: NP");
  });
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = {
  connect,
};