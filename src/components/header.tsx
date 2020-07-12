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
    <div className={'navbar darker-base-background align-content-start'}>
        <ul className={'navbar__items pl-0 m-0'}>
            <div>
                <Link
                    to="/"
                    activeClassName="active"
                    className={'header white-text hyperlink'}>
                    About
                </Link>
            </div>
            <div className={'pl-md-4'}>
                <Link
                    to="/projects/"
                    activeClassName="active"
                    className={'header white-text hyperlink'}>
                    Projects
                </Link>
            </div>
            <div className={'pl-md-4'}>
                <Link
                    to="/resume/"
                    activeClassName="active"
                    className={'header white-text hyperlink'}>
                    Resume
                </Link>
            </div>
        </ul>
        <div className=" navbar__link-toggle p-2">
            <FontAwesomeIcon icon={faBars} color={'white'} className="fas fa-bars" onClick={() => classToggle()}/>
        </div>
    </div>);
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Brandon Saunders`,
}

export default Header
