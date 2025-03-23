import mongoose from 'mongoose';

function connect() {
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to MongoDB`);
  }).catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  })
}

export default connect;