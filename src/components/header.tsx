import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialMediaLinksComponent from "./common/SocialMediaLinksComponent";

interface HeaderInterface {
    siteTitle: string
}

const Header = ({ siteTitle }: HeaderInterface) => (
    <div
        style={{
            justifyContent: 'space-between',
            flexDirection: 'row'
        }}
    >
        <div>
            <h1 style={{ margin: 0, textAlign: 'left', paddingLeft: 5 }}>
                <Link
                    to="/"
                    style={{
                        color: '#000',
                        textDecoration: `none`,
                        fontSize: '2rem'
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
        <div style={{
        }}>
            <SocialMediaLinksComponent/>
        </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Brandon Saunders`,
}

export default Header
