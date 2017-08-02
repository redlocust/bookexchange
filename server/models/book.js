import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/bookexchange',
  {
    useMongoClient: true
  },
  (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!');
      throw error;
    }
  });

let BookSchema = {
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  }
};

const Book = mongoose.model('Book', BookSchema);