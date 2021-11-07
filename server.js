const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// dotenv.config({ path: './config.env' });
dotenv.config({ path: path.resolve(__dirname, './config.env') });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connection successful');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
