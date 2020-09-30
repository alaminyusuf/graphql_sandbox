const mongoose = require('mongoose');

const conn = async () => {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/graphql_sandbox',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    ),
      console.log(`mongoose is connected...`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conn;
