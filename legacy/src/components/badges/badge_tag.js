import React from 'react';
import {Badge} from 'react-bootstrap';
import history from '../../router/history';
import {getKey} from '../../helpers/string_helpers';
import {organizationNameExistsInOrganizations} from '../../helpers/organization_helper';
import RelationshipBuilder from '../../helpers/relationship_builder';

class BadgeTag extends React.Component {
    constructor(props)
    {
        super(props);
        this.relationshipBuilder = new RelationshipBuilder();
    }

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
        let clickable = '';
        switch (this.props.entityType) {
            case 'organization': {
                try {
                    let organizationDoesExist = this.relationshipBuilder.organizationDoesExist(this.props.name);
                    if (organizationDoesExist) {
                        clickable = 'mouse-pointer'
                    }
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case 'project': {
                try {
                    let organizationalData = this.relationshipBuilder.getAssociatedOrganizationsByTag(this.props.name);
                    if(organizationalData.organizations.length > 0){
                        clickable = 'mouse-pointer'
                    }
                } catch (e) {
                    console.error(e);
                }
                break;
            }
            default: {}
        }

        return (
            <Badge
                pill
                   variant={this.props.badgeType}
                   key={this.props.name}
                   onClick={this.handleBadgeClick.bind(this, this.props.entityType)}
                   className={"card-row " + clickable}>
                {this.props.name}
            </Badge>
        )
    }
}

export default BadgeTag;
