import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useRef} from "react"
import SocialMediaLinksComponent from "./common/SocialMediaLinksComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface HeaderInterface {
    siteTitle: string
}

const Header = ({siteTitle}: HeaderInterface) => {
    function classToggle() {
        const navs = document.querySelectorAll('.navbar__items')
        navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
    }
    return (
    <div className={'navbar darker-base-background'}>
        {/*<div className={'navbar__left_side align-self-center'}>*/}
        {/*    <div className={'navbar__link'}>*/}
        {/*        <SocialMediaLinksComponent/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className={"navbar__link p-0"}>
        </div>
        <div className="navbar__link navbar__link-toggle p-auto">
            <FontAwesomeIcon icon={faBars} className="fas fa-bars" onClick={() => classToggle()}/>
        </div>
        <ul className={'navbar__items navbar__right_side m-auto p-auto'}>
            <Link
                to="/"
                className={'navbar__link header white-text'}>
                About
            </Link>
            <Link
                to="/projects"
                className={'navbar__link header white-text'}>
                Projects
            </Link>
            <Link
                to="/resume"
                className={'navbar__link header white-text'}>
                Resume
            </Link>
        </ul>
    </div>);
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Brandon Saunders`,
}

export default Header
