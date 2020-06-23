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
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1,
            minHeight: 70,
        }}
    >
        <div style={{
            flex: 1,
            alignSelf: 'center'
        }}>
            <SocialMediaLinksComponent/>
        </div>
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '1rem'
        }}>
            <h5 style={{ margin: 0, textAlign: 'left', paddingLeft: 5 }}>
                <Link
                    to="/"
                    style={{
                        color: '#000',
                        textDecoration: `none`,
                        fontSize: '1rem'
                    }}
                >
                    About
                </Link>
            </h5>
            <h5 style={{ margin: 0, paddingLeft: '1rem' }}>
                <Link
                    to="/projects"
                    style={{
                        color: '#000',
                        textDecoration: `none`,
                        fontSize: '1rem'
                    }}
                >
                    Projects
                </Link>
            </h5>
            {/*<h5 style={{ margin: 0, paddingLeft: '1rem' }}>*/}
            {/*    <Link*/}
            {/*        to="/resume"*/}
            {/*        style={{*/}
            {/*            color: '#000',*/}
            {/*            textDecoration: `none`,*/}
            {/*            fontSize: '1rem'*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        Resume*/}
            {/*    </Link>*/}
            {/*</h5>*/}
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
