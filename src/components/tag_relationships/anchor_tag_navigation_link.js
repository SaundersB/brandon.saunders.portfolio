import React from 'react';
import {getKey} from '../../helpers/string_helpers';
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
        let url;
        let name;
        switch (this.props.entityType) {
            case 'Organizations': {
                name = this.props.companyName;
                let key = getKey(name);
                url = '/experience#' + key;
                break;
            }
            case 'Projects': {
                name = this.props.name;
                let key = getKey(name);
                url = '/#' + key;
                break;
            }
            default: {
                console.log("No entity type detected");
                return;
            }
        }

        return (
                <div id={ url }
                     className="btn btn-link text-center"
                     onClick={this.handleClick.bind(this, url)}>
                    <Button variant="outline-primary" size="sm" block>
                        {name}
                    </Button>
                </div>
        )
    }
}

export default AnchorTagNavigationLink;
