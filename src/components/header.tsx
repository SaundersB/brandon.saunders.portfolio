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
    <div className={'navbar'}>
        {/*<div className={'navbar__left_side align-self-center'}>*/}
        {/*    <div className={'navbar__link'}>*/}
        {/*        <SocialMediaLinksComponent/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className={"navbar__link p-0"}>
            <Link
                to="/"
                className={'header black-text'}>
                Brandon Saunders Portfolio
            </Link>
        </div>
        <div className="navbar__link navbar__link-toggle p-2">
            <FontAwesomeIcon icon={faBars} className="fas fa-bars" onClick={() => classToggle()}/>
        </div>
        <ul className={'navbar__items navbar__right_side m-0'}>
            <Link
                to="/projects"
                className={'navbar__link header black-text'}>
                Projects
            </Link>
            {/*<Link*/}
            {/*    to="/resume"*/}
            {/*    className={'navbar__link header black-text'}>*/}
            {/*    RESUME*/}
            {/*</Link>*/}
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
