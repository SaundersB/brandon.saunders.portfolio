import React from 'react';
import {getOrganizationKey} from '../../helpers/string_helpers';
import history from '../../router/history';
import {Button} from 'react-bootstrap';
class AnchorTagNavigationLink extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { menuOpen: false };
    }

    handleClick = (path) => {
        this.setState({menuOpen: false});
        history.push(path);
    };

    render()
    {
        let orgKey = getOrganizationKey(this.props.companyName);
        let orgURL = '/experience#' + orgKey;
        return (
                <div id={ orgURL }
                     className="btn btn-link text-center"
                     onClick={this.handleClick.bind(this, orgURL)}>
                    <Button variant="outline-primary" size="sm" block>
                        {this.props.companyName}
                    </Button>
                </div>
        )
    }
}

export default AnchorTagNavigationLink;
