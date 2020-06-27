export interface ProjectInterface {
    name: string;
    experienceId: number;
    url: string;
    startYear: number;
    endYear: number;
    tags: string[];
    image: string;
    description: string;
    estimatedContributionPercentage: number;
}

export default class Project {
    private readonly _name: string
    private readonly _experienceId: Number
    private readonly _url: string
    private readonly _startYear: Number
    private readonly _endYear: Number
    private readonly _tags: object
    private readonly _image: string
    private readonly _description: string
    private readonly _estimatedContributionPercentage: Number

    constructor(projectData: ProjectInterface) {
        this._name = projectData.name;
        this._experienceId = projectData.experienceId;
        this._url = projectData.url;
        this._startYear = projectData.startYear;
        this._endYear = projectData.endYear;
        this._tags = projectData.tags;
        this._image = projectData.image;
        this._description = projectData.description;
        this._estimatedContributionPercentage = projectData.estimatedContributionPercentage;
    }

    get name(): string {
        return this._name;
    }

    get experienceId(): Number {
        return this._experienceId;
    }

    get url(): string {
        return this._url;
    }

    get endYear(): Number {
        return this._endYear;
    }

    get startYear(): Number {
        return this._startYear;
    }

    get tags(): object {
        return this._tags;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }

    get estimatedContributionPercentage(): Number {
        return this._estimatedContributionPercentage;
    }
}
