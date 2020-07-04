import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialMediaLinksComponent from "./common/SocialMediaLinksComponent";

interface HeaderInterface {
    siteTitle: string
}

const Header = ({siteTitle}: HeaderInterface) => (
    <div
        className={'d-flex justify-content-between'}
        style={{
            minHeight: 70,
        }}
    >
        <div className={'align-self-center'}>
            <div>
                <SocialMediaLinksComponent/>
            </div>
        </div>
        <div className={'d-flex flex-row flex-wrap align-items-center pr-4'}>
            <div className={'m-0 pl-2 '}>
                <Link
                    to="/"
                    className={'header black-text'}>
                        ABOUT
                </Link>
            </div>
            <div className={'m-0 pl-4'}>
                <Link
                    to="/projects"
                    className={'header black-text'}>
                        PROJECTS
                </Link>
            </div>
            {/*<div className={'m-0 pl-4'}>*/}
            {/*    <Link*/}
            {/*        to="/resume"*/}
            {/*        className={'header black-text'}>*/}
            {/*        RESUME*/}
            {/*    </Link>*/}
            {/*</div>*/}
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
