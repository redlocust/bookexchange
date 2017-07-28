import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import books from './routes/books.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', books);

app.listen(3000, () => {
  console.log(`connect to port ${port}`);
});