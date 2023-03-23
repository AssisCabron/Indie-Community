const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configurações
app.use(express.json());
app.use(cors());

app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Conexão com o banco de dados
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database!');
});

// Rotas
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/home/index.html'));
});

app.use('/', authRoutes);
app.use('/', userRoutes);

// Inicia o servidor
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
