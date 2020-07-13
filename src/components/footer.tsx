import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useRef} from "react"
import SocialMediaLinksComponent from "./common/SocialMediaLinksComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faEnvelope} from '@fortawesome/free-solid-svg-icons'

interface FooterInterface {
    siteTitle: string
}

const Footer = ({siteTitle}: FooterInterface) => {
    return (
    <div className={'footer base-background justify-content-center align-items-center p-5'}>
        <div className={'white-text secondary-inner-wrapper text-center  default-text'}>
            <h3>Interested in hiring me for your project?</h3>
            Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at
            <a className={'alt-hyperlink white-text sub-text'} target={'_#'} href={'mailto:BrandonNSaunders@gmail.com'}> BrandonNSaunders@gmail.com</a>
            .
        </div>
    </div>);
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: `Brandon Saunders`,
}

export default Footer
