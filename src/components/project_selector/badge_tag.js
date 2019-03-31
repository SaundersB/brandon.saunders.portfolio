import React from 'react';
import {Badge} from 'react-bootstrap';
import history from '../../router/history';
import {getOrganizationKey} from '../../helpers/string_helpers';
import {organizationNameExistsInOrganizations} from '../../helpers/organization_helper';

class BadgeTag extends React.Component {
    handleBadgeClick(badgeClickEventType){
        if(!organizationNameExistsInOrganizations(this.props.name)){
            // No Organization was found
            return;
        }
        switch (badgeClickEventType) {
            case 'organization': {
                history.push('/experience#' + getOrganizationKey(this.props.name));
                break;
            }
            default: {}
        }
    }

    render()
    {
        return (
            <Badge
                   variant={this.props.badgeType}
                   key={this.props.name}
                   onClick={this.handleBadgeClick.bind(this, 'organization')}
                   className="card-row">
                {this.props.name}
            </Badge>
        )
    }
}

export default BadgeTag;
