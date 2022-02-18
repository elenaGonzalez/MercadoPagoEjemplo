const server = require('./src/app.js');
const { conn } = require('./src/db.js');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
}).catch(e => console.log(e));
