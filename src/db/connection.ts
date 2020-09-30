const mongoose = require('mongoose');

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }),
      console.log(`mongoose is connected...`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conn;
