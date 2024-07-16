const express = require("express");
const passport = require("passport");
require('./passport')
const cookieSession = require("cookie-session");
const cors = require("cors");
const app = express();

const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || 5000;

app.use(cookieSession({
  name: "session",
  keys: ["ccloud"],
  maxAge: 24 * 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
