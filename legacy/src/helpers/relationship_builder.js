import experience from '../content/professional_experience_content';
import projects from '../content/project_content';
import {
    COMPANY_NAME,
    DEVELOPMENT_TOOLS_USED_NAME,
    FRAMEWORKS_USED_NAME,
    MARKUP_LANGUAGES_USED_NAME,
    PROGRAMMING_LANGUAGES_USED_NAME, PROJECT_NAME, PROJECT_TAGS_NAME,
    SCRIPTING_LANGUAGES_USED_NAME,
    STYLESHEET_LANGUAGES_USED_NAME,
    TAG_NAME,
} from './constants';


class RelationshipBuilder
{
    getAssociatedOrganizationsByTags(tags)
    {
        let summary = {
            [PROJECT_TAGS_NAME]: {},
        };
        if (typeof tags === 'undefined') {
            return [];
        }
        let tagValues = tags.split(', ');
        tagValues.forEach((tag) => {
            summary[PROJECT_TAGS_NAME][tag] = {
                [TAG_NAME]: tag,
                'organizations': [],
            };
        });
        try {
            let organizationsTechnologies = this.getOrganizationsTechnologies();
            tagValues.forEach((tag) => {
                let tagObject = summary[PROJECT_TAGS_NAME][tag];
                organizationsTechnologies.forEach((organizationsTech) => {
                    if (organizationsTech.technologies.includes(tag)) {
                        let alreadyMatchedTaggedOrganizations = tagObject.organizations;
                        let matchedTagCompanyName = organizationsTech[COMPANY_NAME];
                        let matchedTagTechnologies = organizationsTech['technologies'];
                        let summaryObject = {
                            [COMPANY_NAME]: matchedTagCompanyName,
                            'technologies': matchedTagTechnologies,
                        };
                        if (alreadyMatchedTaggedOrganizations.length > 0) {
                            let newOrgs = [];
                            alreadyMatchedTaggedOrganizations.forEach((organization) => {
                                let tagsCompanyName = organization[COMPANY_NAME];
                                if (tagsCompanyName !== matchedTagCompanyName) {
                                    newOrgs.push(summaryObject);
                                }
                            });
                            alreadyMatchedTaggedOrganizations.push(...newOrgs);
                        } else {
                            alreadyMatchedTaggedOrganizations.push(summaryObject);
                        }
                    }
                });
            });
        } catch (e) {
            console.log(e);
        }

        return summary;
    }

    getAssociatedOrganizationsByTag(tag)
    {
        let summary = {
            [TAG_NAME]: tag,
            'organizations': [],
            'otherProjects': [],
        };
        if (typeof tag === 'undefined') {
            return [];
        }

        try {
            let organizationsTechnologies = this.getOrganizationsTechnologies();
            organizationsTechnologies.forEach((organizationsTech) => {
                if (organizationsTech.technologies.includes(tag)) {
                    let alreadyMatchedTaggedOrganizations = summary.organizations;
                    let matchedTagCompanyName = organizationsTech[COMPANY_NAME];
                    let matchedTagTechnologies = organizationsTech['technologies'];
                    let summaryObject = {
                        [COMPANY_NAME]: matchedTagCompanyName,
                        'technologies': matchedTagTechnologies,
                    };
                    if (alreadyMatchedTaggedOrganizations.length > 0) {
                        let newOrgs = [];
                        alreadyMatchedTaggedOrganizations.forEach((organization) => {
                            let tagsCompanyName = organization[COMPANY_NAME];
                            if (tagsCompanyName !== matchedTagCompanyName) {
                                newOrgs.push(summaryObject);
                            }
                        });
                        alreadyMatchedTaggedOrganizations.push(...newOrgs);
                    } else {
                        alreadyMatchedTaggedOrganizations.push(summaryObject);
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
        return summary;
    }

    getOrganizationsTechnologies()
    {
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
            summaryObject['technologies'] = technologies;
            summary.push(summaryObject);
        });
        return summary;
    }

    getProjectsTags()
    {
        let summary = [];
        projects.forEach((project) => {
            let summaryObject = {};
            let projectTags = project[PROJECT_TAGS_NAME].split(', ');
            summaryObject[PROJECT_NAME] = project[PROJECT_NAME];
            summaryObject['tags'] = projectTags;
            summary.push(summaryObject);
        });
        return summary;
    }

    getAssociatedProjectsByTag(tag)
    {
        let summary = {
            [TAG_NAME]: tag,
            'projects': [],
        };
        if (typeof tag === 'undefined') {
            return [];
        }
        try {
            let projectsTags = this.getProjectsTags();
            projectsTags.forEach((project) => {
                if (project[PROJECT_TAGS_NAME].includes(tag)) {
                    let alreadyMatchedProjectTag = summary.projects;
                    let matchedProjectTagName = project[PROJECT_NAME];
                    let summaryObject = {
                        [PROJECT_NAME]: matchedProjectTagName,
                    };
                    if (alreadyMatchedProjectTag.length > 0) {
                        let newProjects = [];
                        alreadyMatchedProjectTag.forEach((alreadyMatchedProject) => {
                            let tagsCompanyName = alreadyMatchedProject[PROJECT_NAME];
                            if (tagsCompanyName !== matchedProjectTagName) {
                                newProjects.push(summaryObject);
                            }
                        });
                        alreadyMatchedProjectTag.push(summaryObject);
                    } else {
                        alreadyMatchedProjectTag.push(summaryObject);
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
        return summary;
    }

    organizationDoesExist(organizationName)
    {
        let companyExists = false;
        experience.forEach((company) => {
                let companyName = company[COMPANY_NAME];
                if (companyName === organizationName) {
                    companyExists = true;
                }
            },
        );
        return companyExists;
    }
}

export default RelationshipBuilder;
