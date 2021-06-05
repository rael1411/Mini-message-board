var express = require('express');
const { render } = require('../app');
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render("form", {title: "Form"})
})
router.post("/new", function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect("/")
})
module.exports = router;
