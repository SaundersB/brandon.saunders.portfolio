import React from 'react';
import {Badge} from 'react-bootstrap';


class BadgeFactory extends React.Component {
    static createNewBadge(badgeName, badgeVariant){
        return (
            <Badge variant={badgeVariant} key={badgeName} className="card-row">
                {badgeName}
            </Badge>
        )
    }

    render()
    {
        return (
            <Badge pill variant={this.props.badgeType} key={this.props.name} className="card-row">
                {this.props.name}
            </Badge>
        )
    }
}

export default BadgeFactory;
