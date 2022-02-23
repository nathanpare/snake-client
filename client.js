const { on } = require("events");
const net = require("net");
const { start } = require("repl");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "127.0.0.1",
    port: 50541
  });
  console.log("Connecting ...");
  conn.on("connect", () => {
    console.log("Successfully connected to server")
    conn.write("Name: NP")
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


connect();

module.exports = {
  connect,
};