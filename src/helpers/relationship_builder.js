import React from 'react';
import experience from '../content/professional_experience_content';
import {
    COMPANY_NAME,
    DEVELOPMENT_TOOLS_USED_NAME,
    FRAMEWORKS_USED_NAME,
    MARKUP_LANGUAGES_USED_NAME,
    PROGRAMMING_LANGUAGES_USED_NAME,
    SCRIPTING_LANGUAGES_USED_NAME,
    STYLESHEET_LANGUAGES_USED_NAME,
    TAG_KEY,
    TAG_NAME,
} from './constants';


class RelationshipBuilder
{
    getAssociatedOrganizationsByTag(tags)
    {
        let summary = {};
        if (typeof tags === 'undefined') {
            return [];
        }
        let tagValues = tags.split(', ');
        tagValues.forEach((tag) => {
            summary[TAG_KEY] = {
                [TAG_NAME]: tag
            };
        });

        let organizationsTechnologies = this.getOrganizationsTechnologies();
        console.log(organizationsTechnologies);

        tagValues.forEach((tag) => {
            let tagObject = summary[TAG_KEY];
            tagObject.organizations = [];
            organizationsTechnologies.forEach((organizationsTech) => {
                if(organizationsTech.technologies.includes(tag)){
                    let alreadyMatchedTaggedOrganizations = tagObject["organizations"];
                    let matchedTagCompanyName = organizationsTech[COMPANY_NAME];
                    let matchedTagTechnologies = organizationsTech["technologies"];
                    let summaryObject = {
                        [COMPANY_NAME]: matchedTagCompanyName,
                        "technologies": matchedTagTechnologies,
                    };
                    if(alreadyMatchedTaggedOrganizations.length > 0) {
                        let newOrgs = [];
                        alreadyMatchedTaggedOrganizations.forEach((organization) => {
                            let tagsCompanyName = organization[COMPANY_NAME];
                            if(tagsCompanyName !== matchedTagCompanyName){
                                newOrgs.push(summaryObject);
                            }
                        });
                        alreadyMatchedTaggedOrganizations.push(newOrgs);
                    } else {
                        alreadyMatchedTaggedOrganizations.push(summaryObject);
                    }
                }
            });
        });

        return summary;
    }

    getOrganizationsTechnologies() {
        let summary = [];
        experience.forEach((company) => {
            let summaryObject = {};
            let devToolsArray = company[DEVELOPMENT_TOOLS_USED_NAME].split(', ');
            let programmingLanguagesArray = company[PROGRAMMING_LANGUAGES_USED_NAME].split(', ');
            let scriptingLanguagesArray = company[SCRIPTING_LANGUAGES_USED_NAME].split(', ');
            let markupLanguagesArray = company[MARKUP_LANGUAGES_USED_NAME].split(', ');
            let stylesheetLanguagesArray = company[STYLESHEET_LANGUAGES_USED_NAME].split(', ');
            let frameworksArray = company[FRAMEWORKS_USED_NAME].split(', ');
            let technologies = [
                ...devToolsArray,
                ...programmingLanguagesArray,
                ...scriptingLanguagesArray,
                ...markupLanguagesArray,
                ...stylesheetLanguagesArray,
                ...frameworksArray,
            ];
            summaryObject[COMPANY_NAME] = company[COMPANY_NAME];
            summaryObject["technologies"] = technologies;
            summary.push(summaryObject);
        });
        return summary;
    }
}

export default RelationshipBuilder;
