import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <div
        style={{
        }}
    >
        <h1 style={{ margin: 0, textAlign: 'left' }}>
            <Link
                to="/"
                style={{
                    color: '#ffffff',
                    textDecoration: `none`,
                    fontSize: '2rem'
                }}
            >
                {siteTitle}
            </Link>
        </h1>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Brandon Saunders`,
}

export default Header
