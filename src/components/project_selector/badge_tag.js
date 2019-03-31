import React from 'react';
import {Badge} from 'react-bootstrap';


class BadgeTag extends React.Component {

    render()
    {
        return (
            <Badge pill variant={this.props.badgeType} key={this.props.name} className="card-row">
                {this.props.name}
            </Badge>
        )
    }
}

export default BadgeTag;
