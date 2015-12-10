// Take from here for now: http://ntt.cc/2008/05/10/over-10-useful-javascript-regular-expression-functions-to-improve-your-web-applications-efficiency.html
module.exports = {
  nonEmpty: /\S/,
  number: /^[-]?[0-9]+[\.]?[0-9]+$/,
  integer: /^\s*\d+\s*$/,
  currency: /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/,
  email: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
}
