require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/users', require('./routes/users.route'));
app.use('/tasks', require('./routes/tasks.route'));

app.listen(port, () => console.log(`Server open at http://localhost:${port}`));