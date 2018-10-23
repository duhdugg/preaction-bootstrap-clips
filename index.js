const Alert = require('./src/components/Alert.js').default
const Boilerplate = require('./src/components/Boilerplate.js').default
const BuyButton = require('./src/components/BuyButton.js').default
const Card = require('./src/components/Card.js').default
const getClassesForColumn = require('./src/lib/getClassesForColumn.js').default
const Nav = require('./src/components/Nav.js').default
const NavBar = require('./src/components/NavBar.js').default
const NavItem = require('./src/components/NavItem.js').default

module.exports = {
  Alert,
  Boilerplate,
  BuyButton,
  Card,
  getClassesForColumn,
  Nav,
  NavBar,
  NavItem
}
module.exports.default = module.exports
