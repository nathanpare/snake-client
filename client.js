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
  //defining what our server does upon a client connection
  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Name: NP");
  });
  //server data
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  //defining what our server does upon a client disconection
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