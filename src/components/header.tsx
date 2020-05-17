import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
        }}
    >
        <h1 style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    textDecoration: `none`,
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
  siteTitle: `Brandon Saunders Portfolio`,
}

export default Header