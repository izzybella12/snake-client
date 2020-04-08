const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148', 
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: BRP');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (data) => {
    conn.write('Move: up');
  })
  
  // setTimeout( () => {
  //   conn.on('connect', () => {
  //     conn.write('Move: down');
  //   })
  // }, 500);

  // setTimeout( () => {
  //   conn.on('connect', () => {
  //     conn.write('Move: up');
  //   });
  // }, 1000);
  

  return conn;
}

module.exports = connect;
