import React from 'react';
import {Badge} from 'react-bootstrap';
import history from '../../router/history';
import {getKey} from '../../helpers/string_helpers';
import {organizationNameExistsInOrganizations} from '../../helpers/organization_helper';

class BadgeTag extends React.Component {
    handleBadgeClick(badgeClickEventType){
        switch (this.props.entityType) {
            case 'organization': {
                if(!organizationNameExistsInOrganizations(this.props.name)){
                    // No Organization was found
                    return;
                }
                break;
            }
            case 'project': {
                break;
            }
            default: {}
        }

        switch (badgeClickEventType) {
            case 'organization': {
                history.push('/experience#' + getKey(this.props.name));
                break;
            }
            case 'project': {
                history.push('/#' + getKey(this.props.name));
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
                   onClick={this.handleBadgeClick.bind(this, this.props.entityType)}
                   className="card-row">
                {this.props.name}
            </Badge>
        )
    }
}

export default BadgeTag;
