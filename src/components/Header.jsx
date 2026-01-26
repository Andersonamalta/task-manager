import PropTypes from "prop-types"

function Header(props) {
  return <header className="header">{props.children}</header>
}

Header.prototype = {
  children: PropTypes.node.isRequired,
}

export default Header
