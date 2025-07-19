const express = require('express');
const app = express();
const db = require('./models');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/permisos', require('./routes/permisos'));
app.use('/api/grupos', require('./routes/grupos'));
app.use('/api/sesiones', require('./routes/sesiones'));

const start = async () => {
  try {
    await db.sequelize.sync();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error('Unable to connect to database', err);
  }
};

start();
