const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./src/controllers/user.controller');
const bookRouter = require('./src/controllers/book.controller');

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", bookRouter);

app.listen(8000, () => {
    
    console.log('Server is running on port 8000');
});