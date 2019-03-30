import {Badge} from 'react-bootstrap';
import React from 'react';
import experience from '../content/professional_experience_content';


class RelationshipBuilder {
    getAssociatedOrganizationsByTechnologies(technologies) {
        if(typeof technologies === 'undefined'){
            return;
        }
        let technologiesArray = technologies.split(', ');
        let development = {};

        experience.forEach(() => {
            let summaryObject = {};
        });

//        return technologiesArray.map((tool) => {
//                return (
//                    <Badge pill variant={badgeType} key={tool} className="card-row">
//                        {tool}
//                    </Badge>
//                );
//            }
//        )
    }
}
