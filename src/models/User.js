import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
});

export default mongoose.model('User', userSchema);
