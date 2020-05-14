import organizations from '../content/professional_experience_content';
import {COMPANY_NAME} from './constants';

export function organizationNameExistsInOrganizations(organizationName){
    let match = false;
    organizations.forEach((organization) => {
        if(organizationName === organization[COMPANY_NAME]){
            match = true;
        }
    });
    return match;
}


