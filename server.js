require('dotenv').config();
const app = require('./app');
const { dbRepairs, dbUsers } = require('./database/config');

dbUsers
  .authenticate()
  .then(() => console.log('Database users is authenticated'))
  .catch((err) => console.log(err));

dbRepairs
  .authenticate()
  .then(() => console.log('Database repairs is authenticated'))
  .catch((err) => console.log(err));

dbUsers
  .sync()
  .then(() => console.log('Database users is synced'))
  .catch((err) => console.log(err));

dbRepairs
  .sync()
  .then(() => console.log('Database repairs is synced'))
  .catch((err) => console.log(err));

const port = 3005;
app.listen(port, () => {
  console.log(`App is running in port ${port}`);
});
