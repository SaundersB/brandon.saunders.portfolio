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
    <div className={'navbar darker-base-background'}>
        {/*<div className={'navbar__left_side align-self-center'}>*/}
        {/*    <div className={'navbar__link'}>*/}
        {/*        <SocialMediaLinksComponent/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div>
            <FontAwesomeIcon icon={faEnvelope} color={'white'} className={'mt-1 mb-1 mr-2'} />
            <div className={'align-self-end'}>
                <a className={'black-text sub-text'} target={'_#'} href={'BrandonNSaunders@gmail.com'}>Email</a>
            </div>
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
